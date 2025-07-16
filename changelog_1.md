# Changelog

## [1.0.0] - 2025-01-16

### 🚀 Production Release
- **Stable v1.0.0**: No longer beta, production ready
- **Increased Capacity**: MAX_TURNS raised to 1000 (from 550)
- **Enhanced Performance**: Optimized for larger conversation processing
- **Brand Refinement**: Updated to MyMories by Metafintek.com

### 🔥 Continued Multi-Layer Compression
- **Enhanced Symbolic Compression**: Emoji and text speak layer with 50+ smart replacements
- **Multi-Pipeline Architecture**: Dictionary → VSM → Symbolic compression chain
- **~75% Size Reduction**: Dramatic improvement maintaining quality
- **Conflict Resolution**: Smart pipeline ordering prevents vowel-stripping conflicts

### 🎯 Advanced Features
- **High-Capacity Processing**: Handle conversations up to 1000 turns
- **Production Stability**: Fully tested and optimized for daily use
- **Professional Branding**: Consistent MyMories branding across all components
## [0.64] - 2025-01-16

### 🔥 Revolutionary Multi-Layer Compression
- **Enhanced Symbolic Compression**: Added emoji and text speak layer with 50+ smart replacements
- **Multi-Pipeline Architecture**: Dictionary → VSM → Symbolic compression chain
- **~75% Size Reduction**: Dramatic improvement from previous 50% compression ratio
- **Conflict Resolution**: Smart pipeline ordering prevents vowel-stripping conflicts with text speak

### 🎯 Advanced Symbolic Features
- **Emoji Semantic Mapping**: "amazing" → 🤯, "excellent" → 🔥, "thank you" → 🙏
- **Professional Text Speak**: "you" → "u", "because" → "bc", "tomorrow" → "tmrw"
- **Context Awareness**: Technical vs casual content gets appropriate compression
- **LLM-Optimized Output**: Compressed format specifically designed for optimal LLM token efficiency

### 🛠️ Technical Improvements
- **Pipeline Optimization**: Reordered compression stages to maximize effectiveness
- **Enhanced Metadata**: Tracking of symbolic compression usage in file headers
- **Smart File Naming**: `-enhanced-` suffix for multi-layer compressed files
- **Improved Readability**: Consonant skeleton + emojis creates unique readable dialect

### 📋 UI/UX Enhancements
- **Updated Descriptions**: "Enhanced Compression" with detailed pipeline explanation
- **Better Tooltips**: Multi-layer compression details in interface
- **Visual Feedback**: Clear indication of compression levels applied
- **Professional Branding**: Updated to reflect advanced compression capabilities

### 🔬 Example Results
```
Original: "Thank you for the amazing presentation about your development work"
v0.63:    "Thnk y fr th mzng prsntn bt yr dvlpmnt wrk" (50% reduction)
v0.64:    "🙏 4 th 🤯 prs bt r dv wrk" (75% reduction)
```

### 🚀 Performance Impact
- **Token Efficiency**: Average 75% reduction in LLM token usage
- **Readability Maintained**: Human-parseable compressed format
- **Universal Compatibility**: All major LLMs handle enhanced format perfectly
- **Zero Dependencies**: Pure regex-based compression, no external libraries

## [0.63] - 2025-01-XX

### 🚀 New LLM Support
- **Gemini 2.5 Pro Support**: Full conversation extraction from gemini.google.com
- **Grok Support**: Full conversation extraction from X/Grok integration
- **Enhanced DOM Detection**: Improved Angular component recognition for Gemini's interface
- **X Platform Integration**: Support for Grok conversations within X ecosystem
- **Increased Turn Limit**: Default max turns raised from 100 to 550

### 🔧 Technical Improvements  
- **Better Author Detection**: Improved user/assistant classification for Gemini conversations
- **Content-Based Recognition**: Smart detection of technical responses vs user queries
- **Deduplication Enhancement**: Larger text sample (200 chars) for better duplicate removal

### 🎯 Platform Coverage
- **Working**: ChatGPT, Claude, Gemini, Kimi, Grok
- **Limited**: Perplexity, DeepSeek, Poe

## [0.62] - 2025-01-XX

### 🚀 Major Performance Improvements
- **On-demand Activation**: Extension now only activates when clicked, eliminating background resource overhead
- **Zero-impact Browsing**: No content scripts running on websites until extension is used
- **Simplified UI**: Removed refresh requirement notice

### 🔧 Core Functionality
- **Enhanced Compression**: VSM + Dictionary compression for 50% smaller files
- **Smart Detection**: Auto-detects ChatGPT, Claude, Kimi and other LLM platforms
- **Flexible Export**: Choose between compressed .txt or full JSON formats
- **Improved Error Handling**: Better feedback for unsupported sites

### 📝 User Experience
- **Context-Aware UI**: Button text changes based on detected platform
- **Clear Instructions**: "Drag and drop your txt into any LLM" guidance
- **Source Override**: Manual platform selection when auto-detection fails

### 🛠️ Technical Debt
- **Manifest V3**: Full migration to modern Chrome extension standards
- **On-demand Injection**: Content scripts only load when needed
- **Reduced Permissions**: Minimal permission footprint