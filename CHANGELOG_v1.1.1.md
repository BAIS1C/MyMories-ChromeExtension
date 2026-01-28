# Changelog v1.1.1

## [1.1.1] - 2026-01-28

### 🆕 New Platform Support
- **Z.ai (ChatGLM)**: Added support for chat.z.ai and chatglm.cn
- **Grok on X**: Enhanced Grok support to include x.com/i/grok (in addition to grok.com)
- **Complete Coverage**: Now supports 9 AI platforms total

### 🐛 Critical Bug Fixes
- **PING Handler**: Added missing PING/PONG health check to content.js
- **Script Injection**: Fixed compression-dictionary.js not being injected in dynamic scenarios
- **Smart VSM Logic**: Corrected entity preservation logic in vowel stripping
- **Error Messages**: Improved error handling with specific, actionable debugging steps
- **Dictionary Safety**: Added defensive checks and graceful degradation for dictionary compression

### 🎨 UI Improvements
- **Auto-Detection Display**: Dropdown now visually shows detected platform (e.g., "ChatGPT")
- **Context-Aware Button**: Button text updates to reflect detected platform
- **Better Feedback**: Timeout increased to 10s with clearer error messages

### 📋 Platform Coverage (v1.1.1)
**Fully Supported:**
1. ChatGPT (chatgpt.com, chat.openai.com)
2. Claude (claude.ai)
3. Google Gemini (gemini.google.com)
4. Grok (grok.com, x.com/i/grok)
5. DeepSeek (chat.deepseek.com)
6. Perplexity (perplexity.ai)
7. Kimi (kimi.com, kimi.moonshot.cn)
8. Z.ai / ChatGLM (chat.z.ai, chatglm.cn)

**Limited Support:**
9. Poe (poe.com)

### 🔧 Technical Improvements
- Enhanced content script selectors for Z.ai/ChatGLM
- Updated manifest permissions for all new platforms
- Improved X.com integration for Grok conversations
- Better DOM detection across all platforms

### 📦 Files Modified
- `popup.js` - Platform detection, UI updates, error handling
- `content.js` - Added PING handler, Z.ai selectors
- `manifest.json` - Host permissions and content script matches
- `popup.html` - Added Z.ai to dropdown options
- `README.md` - Updated platform list and version

### ✅ Testing Results
- ChatGPT: ✅ Working (31 turns extracted, 30% compression)
- Dropdown auto-detection: ✅ Working
- Multi-layer compression: ✅ Working (Dictionary + VSM + Symbolic)

### 🚀 Deployment Notes
This is a **patch release** with critical bug fixes and new platform support. All existing installations should update immediately.

**Installation:**
1. Remove old version from chrome://extensions
2. Load unpacked with new v1.1.1 files
3. Refresh all AI chat tabs
4. Test on your primary platform

### 📝 Known Issues
None currently identified.

### 🔮 Next Steps
- Monitor Z.ai selector stability as platform evolves
- Gather feedback on Grok X.com integration
- Consider adding more Chinese platforms (Doubao, Wenxin, etc.)
