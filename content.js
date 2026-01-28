// Enhanced content script with robust 2025 selectors
console.log('MyMory content script loaded on:', window.location.href);

// Set injection flag to prevent duplicate injections
window.myMoryInjected = true;

const MAX_TURNS = 1000;

function harvestChat() {
  console.log('🔍 Starting chat harvest...');
  
  // ROBUST SELECTORS (2025 Edition)
  // We prioritize semantic attributes (data-testid, role, aria-label) over CSS classes
  const selectors = [
    // --- ChatGPT (Stable) ---
    '[data-message-author-role="user"]',
    '[data-message-author-role="assistant"]',
    
    // --- Claude (Stable) ---
    '.font-claude-message',
    '.font-user-message',
    '[data-testid="user-message"]',
    '[data-testid="claude-message"]',
    
    // --- Gemini (Updated) ---
    // Gemini uses specific classes for content blocks
    '.user-query-content',
    '.model-response-text',
    '[data-test-id="user-query"]', 
    '[data-test-id="model-response"]',
    
    // --- Grok / X (Stable) ---
    '[data-testid="tweetText"]', // Grok often uses X's tweet component structure
    '[data-testid="grok-response"]',
    
    // --- DeepSeek (New) ---
    '.ds-markdown',
    '.ds-user-message',
    
    // --- Perplexity ---
    '[data-testid="thread-message"]',
    '.prose', // Common tailwind class for markdown text
    
    // --- Z.ai / ChatGLM (New) ---
    '[class*="user-message"]',
    '[class*="assistant-message"]',
    '[class*="chat-message"]',
    '.glm-markdown',
    
    // --- Generic / Fallback ---
    // Many React apps use these for Markdown rendering
    '.markdown-prose',
    '.markdown-body',
    '[class*="message-content"]',
    '[class*="conversation-turn"]'
  ];
  
  let allTurns = [];
  
  // Helper to determine author based on context
  const determineAuthor = (element, text) => {
    // 1. Explicit Attributes
    const role = element.getAttribute('data-message-author-role');
    if (role) return role;
    
    // 2. Class Name Heuristics
    const classStr = element.className.toLowerCase();
    if (classStr.includes('user') || classStr.includes('human')) return 'user';
    if (classStr.includes('assistant') || classStr.includes('model') || classStr.includes('bot') || classStr.includes('claude') || classStr.includes('gpt')) return 'assistant';
    
    // 3. Parent/Container Heuristics (Traverse up 3 levels)
    let parent = element.parentElement;
    for (let i = 0; i < 3 && parent; i++) {
        const parentClass = (parent.className || '').toString().toLowerCase();
        const parentTestId = (parent.getAttribute('data-testid') || '').toLowerCase();
        
        if (parentClass.includes('user') || parentTestId.includes('user')) return 'user';
        if (parentClass.includes('assistant') || parentTestId.includes('assistant') || parentTestId.includes('grok')) return 'assistant';
        parent = parent.parentElement;
    }

    // 4. Fallback based on text length ( Assistants usually talk more)
    return text.length > 150 ? 'assistant' : 'user';
  };

  selectors.forEach(selector => {
    try {
      const elements = document.querySelectorAll(selector);
      
      elements.forEach(element => {
        const text = (element.innerText || element.textContent || '').trim();
        
        // Skip empty, UI noise, or very short generic texts
        if (!text || text.length < 5) return;
        if (text.match(/^(Copy|Retry|Share|Regenerate|Bad response|Good response)$/i)) return;

        const author = determineAuthor(element, text);
        
        allTurns.push({
          author: author,
          text: text,
          index: Array.from(document.querySelectorAll('*')).indexOf(element) // Capture DOM order
        });
      });
    } catch (error) {
      // Selector not valid for this page, ignore
    }
  });
  
  // Sort by DOM appearance to keep conversation in order
  allTurns.sort((a, b) => a.index - b.index);

  // Deduplicate (Greedy strategy)
  const uniqueTurns = [];
  const seenTexts = new Set();
  
  allTurns.forEach(turn => {
    // Create a fingerprint of the first 50 chars to detect duplicates
    // (e.g., when a "markdown" div is inside a "message" div, we only want one)
    const fingerprint = turn.text.substring(0, 50);
    
    if (!seenTexts.has(fingerprint)) {
      seenTexts.add(fingerprint);
      uniqueTurns.push({
        author: turn.author,
        text: turn.text
      });
    }
  });
  
  console.log(`✅ Harvested ${uniqueTurns.length} unique turns`);
  return uniqueTurns.slice(-MAX_TURNS);
}

// Message Listener
if (chrome && chrome.runtime && chrome.runtime.onMessage) {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'PING') {
      // Health check - respond immediately
      sendResponse('PONG');
      return true;
    }
    
    if (message.type === 'HARVEST') {
      try {
        const turns = harvestChat();
        sendResponse(turns);
      } catch (error) {
        console.error('💥 Error harvesting:', error);
        sendResponse([]);
      }
    }
    return true; // Keep channel open
  });
}