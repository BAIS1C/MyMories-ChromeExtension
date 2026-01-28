# MyMories Platform Support Reference

## Version: 1.1.1
## Total Platforms: 9 (8 fully supported, 1 limited)

---

## ✅ Fully Supported Platforms

### 1. ChatGPT
- **URLs**: chatgpt.com, chat.openai.com
- **Status**: ✅ Fully working
- **Selectors**: `[data-message-author-role="user"]`, `[data-message-author-role="assistant"]`
- **Notes**: Most stable platform, uses semantic HTML attributes

### 2. Claude
- **URLs**: claude.ai
- **Status**: ✅ Fully working
- **Selectors**: `.font-claude-message`, `.font-user-message`, `[data-testid]`
- **Notes**: Uses custom font classes and test IDs

### 3. Google Gemini
- **URLs**: gemini.google.com
- **Status**: ✅ Fully working
- **Selectors**: `.user-query-content`, `.model-response-text`, `[data-test-id]`
- **Notes**: Angular-based, uses content blocks

### 4. Grok
- **URLs**: grok.com, x.com/i/grok
- **Status**: ✅ Fully working
- **Selectors**: `[data-testid="tweetText"]`, `[data-testid="grok-response"]`
- **Notes**: Now supports both standalone site and X.com integration

### 5. DeepSeek
- **URLs**: chat.deepseek.com
- **Status**: ✅ Fully working
- **Selectors**: `.ds-markdown`, `.ds-user-message`
- **Notes**: Uses "ds-" prefixed classes

### 6. Perplexity
- **URLs**: perplexity.ai
- **Status**: ✅ Fully working
- **Selectors**: `[data-testid="thread-message"]`, `.prose`
- **Notes**: Uses Tailwind prose classes

### 7. Kimi
- **URLs**: kimi.com, kimi.moonshot.cn
- **Status**: ✅ Fully working
- **Selectors**: Generic message selectors
- **Notes**: Chinese market leader from Moonshot AI

### 8. Z.ai (ChatGLM)
- **URLs**: chat.z.ai, chatglm.cn
- **Status**: ✅ Fully working (NEW in v1.1.1)
- **Selectors**: `[class*="user-message"]`, `[class*="assistant-message"]`, `.glm-markdown`
- **Notes**: Chinese platform from Zhipu AI, both English and Chinese domains

---

## ⚠️ Limited Support

### 9. Poe
- **URLs**: poe.com
- **Status**: ⚠️ Limited compatibility
- **Selectors**: Generic fallback selectors
- **Notes**: DOM structure may be incomplete, conversation structure may not be fully captured

---

## 🔍 Detection Priority

The extension uses pattern matching in this order:

1. **Exact domain match** (e.g., chatgpt.com)
2. **Subdomain match** (e.g., chat.openai.com)
3. **Path match** (e.g., x.com/i/grok)
4. **Fallback to generic** (URL content)

---

## 🛠️ Selector Strategy

### Primary Strategy: Semantic Attributes
- Prioritize `data-testid`, `data-message-author-role`, `role`
- These are more stable than CSS classes

### Secondary Strategy: Stable Class Names
- Platform-specific prefixes (e.g., `.ds-`, `.font-`)
- Common patterns (e.g., `.prose`, `.markdown-body`)

### Fallback Strategy: Generic Patterns
- `[class*="message-content"]`
- `[class*="conversation-turn"]`
- `[class*="user-message"]`
- `[class*="assistant-message"]`

---

## 📊 Author Detection Logic

The extension determines message author through:

1. **Explicit attributes** (e.g., `data-message-author-role="user"`)
2. **Class name heuristics** (e.g., `.user-message`, `.assistant-message`)
3. **Parent container analysis** (checks up to 3 parent levels)
4. **Content length heuristic** (assistant messages typically longer >150 chars)

---

## 🔄 Deduplication Strategy

To handle nested DOM structures (e.g., markdown inside message divs):

1. Extract all matching elements
2. Create 50-character fingerprint of each message
3. Keep only first occurrence of each fingerprint
4. Sort by DOM order to maintain conversation flow

---

## 🚀 Future Platform Candidates

### Chinese Market
- **Doubao** (doubao.com) - ByteDance
- **Wenxin Yiyan** (yiyan.baidu.com) - Baidu
- **Tongyi Qianwen** (qianwen.aliyun.com) - Alibaba

### International
- **Meta AI** (meta.ai)
- **Mistral Chat** (chat.mistral.ai)
- **HuggingChat** (huggingface.co/chat)
- **Character.AI** (character.ai)

### Enterprise
- **Microsoft Copilot** (copilot.microsoft.com)
- **Google Bard** (if rebranded separately from Gemini)

---

## 📝 Testing Checklist

For each new platform:

- [ ] Verify URL pattern detection
- [ ] Test message extraction (user + assistant)
- [ ] Validate author detection accuracy
- [ ] Check deduplication effectiveness
- [ ] Test with long conversations (100+ turns)
- [ ] Verify compression pipeline compatibility
- [ ] Test dynamic script injection
- [ ] Confirm PING/PONG health checks work

---

## 🐛 Troubleshooting

### Platform Not Detected
1. Check URL in `detectSourceContext()` patterns
2. Verify host_permissions in manifest.json
3. Confirm content_scripts matches include domain

### No Messages Extracted
1. Open browser console (F12)
2. Check for selector match errors
3. Inspect DOM structure for message elements
4. Add platform-specific selectors to content.js

### Author Detection Wrong
1. Verify data attributes on message elements
2. Check parent container classes
3. Review determineAuthor() logic
4. Consider adding platform-specific rules

---

## 📚 Resources

- **Manifest V3 Docs**: https://developer.chrome.com/docs/extensions/mv3/
- **Content Scripts**: https://developer.chrome.com/docs/extensions/mv3/content_scripts/
- **Message Passing**: https://developer.chrome.com/docs/extensions/mv3/messaging/

---

**Last Updated**: January 28, 2026  
**Version**: 1.1.1  
**Maintainer**: PT Metafintek AI Studios
