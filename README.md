# MyMories v1.0.0

**Save LLM chats as portable .txt files with 75% compression**

MyMories is a privacy-first AI chat backup tool that allows you to save your conversations from popular LLM platforms as compressed, portable text files. Keep your valuable AI interactions organized and accessible forever.

## 🚀 Features

- **🔥 Enhanced Multi-Layer Compression**: Dictionary + Symbolic + VSM achieves ~75% size reduction
- **🎯 Smart Symbolic Compression**: Emoji and text speak replacements for maximum token efficiency
- **💬 Multi-Platform Support**: Extract conversations from ChatGPT, Claude, Google Gemini, Kimi & Grok
- **🌐 Universal Compatibility**: Exported files work with any top-tier LLM
- **⚡ On-Demand Activation**: Zero overhead until you click to use
- **📚 Web Archiving**: Save any web content, not just chat conversations
- **📋 Privacy-First**: All processing happens locally - no data sent to external servers
- **🔄 Instant Context**: Drag and drop files into any LLM to continue conversations


## 📦 Installation

### From Chrome Web Store
1. Visit the Chrome Web Store
2. Search for "MyMories by Metafintek.com"
3. Click "Add to Chrome"
4. Grant necessary permissions

### Manual Installation (Developer Mode)
1. Download the extension files
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension folder
5. MyMories will appear in your extensions toolbar

## 🛠️ Usage

### Basic Export
1. Navigate to any AI chat platform (ChatGPT, Claude, etc.)
2. Click the MyMories icon in your browser toolbar
3. Select the conversations you want to export
4. Choose your compression level (recommended: 75%)
5. Click "Export" to download your .txt file

### Supported Platforms
- **ChatGPT** (chat.openai.com)
- **Claude** (claude.ai)
- **Google Gemini** (gemini.google.com)
- **Perplexity** (perplexity.ai)
- **Character.AI** (character.ai)
- **Poe** (poe.com)
- And many more...

### Export Options
- **Single Chat**: Export individual conversations
- **Bulk Export**: Select multiple chats for batch processing
- **Date Range**: Export conversations from specific time periods
- **Compression Levels**: Choose between 50%, 65%, or 75% compression

## 📁 File Structure

Exported files follow this naming convention:
```
[Platform]_[Date]_[ChatTitle]_MyMories.txt
```

Example:
```
ChatGPT_2024-01-15_Python_Tutorial_MyMories.txt
Claude_2024-01-16_Creative_Writing_MyMories.txt
```

## 🔧 Technical Details

### Permissions Required
- **activeTab**: Read content from current AI chat pages
- **downloads**: Save exported files to your Downloads folder
- **scripting**: Inject content scripts for chat extraction

### File Format
MyMories uses an optimized text format that:
- Preserves conversation structure
- Maintains readability
- Achieves high compression ratios
- Supports universal text editors

### Privacy & Security
- **No Data Collection**: Zero telemetry or analytics
- **Local Processing**: All compression happens on your device
- **No Server Communication**: Extension works entirely offline
- **Open Source**: Code available for audit and contribution

## 🎨 Customization

### Compression Settings
Access advanced settings by:
1. Right-click the MyMories icon
2. Select "Options"
3. Adjust compression levels and file naming preferences

### Keyboard Shortcuts
COMING SOON

## 📋 System Requirements

- **Browser**: Chrome 88+ or Chromium-based browsers
- **Storage**: Minimal disk space required
- **RAM**: Works efficiently with 4GB+ RAM
- **OS**: Windows 10+, macOS 10.14+, Linux (Ubuntu 18.04+)

## 🔄 Version History

### v1.0.0 (Current)
- Initial release
- Support for 8+ major AI platforms
- 75% compression capability
- Privacy-first architecture
- Bulk export functionality

## 🆘 Troubleshooting

### Common Issues

**Export button not appearing**
- Refresh the AI chat page
- Ensure you're on a supported platform
- Check that the extension is enabled

**Low compression rates**
- Try different compression levels in settings
- Shorter conversations compress less efficiently
- Technical discussions may have different compression ratios

**Download failures**
- Check your browser's download permissions
- Ensure sufficient disk space
- Try exporting smaller batches

### Error Messages
- **"No conversations found"**: Refresh the page and try again
- **"Export failed"**: Check browser console for detailed error info
- **"Compression error"**: Reduce compression level and retry

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Setup
```bash
# Clone the repository
git clone https://github.com/metafintek/mymories-extension.git

# Install dependencies
npm install

# Build for development
npm run build:dev

# Load unpacked extension in Chrome
# Navigate to chrome://extensions/
# Enable Developer mode
# Click "Load unpacked" and select the dist folder
```

## 📄 License

This project is licensed under the GNU PUBLIC LIMITED License - Attribution and Link back to Repo please. see the [LICENSE](LICENSE) file for details.

## 🌟 Support

### Documentation
- **Website**: [metafintek.com](https://metafintek.com)

### Contact
- **Email**: aliya@metafintek.com
- **Issues**: Report bugs on our GitHub Issues page
- **Feature Requests**: Submit suggestions via our feedback form

### Community
- **Discord**: Join our community server for help and discussion
- **Reddit**: r/MyMories for user tips and tricks
- **Twitter**: @MetaFinTek for updates and announcements

## 🔮 Roadmap

### Upcoming Features (v1.1.0)
- [ ] Export to PDF format
- [ ] Advanced search and filtering
- [ ] Conversation tagging system
- [ ] Cloud sync options (optional)

### Future Versions
- [ ] Mobile app companion
- [ ] Advanced analytics dashboard
- [ ] API for third-party integrations
- [ ] Custom export templates

## 🎯 Use Cases

### Students & Researchers
- Archive learning conversations with AI tutors
- Build a personal knowledge base
- Create study materials from AI interactions

### Developers
- Save coding solutions and debugging sessions
- Build a reference library of AI-generated code
- Document AI-assisted development processes

### Content Creators
- Preserve brainstorming sessions with AI
- Archive creative writing collaborations
- Build inspiration libraries

### Professionals
- Keep records of AI-assisted analysis
- Document decision-making processes
- Create training materials from AI interactions

## 📊 Performance

### Compression Benchmarks
- **Average Compression**: 75%
- **Processing Speed**: 1000+ messages/second
- **Memory Usage**: <50MB during export
- **File Size Examples**:
  - 100-message chat: ~15KB (vs 60KB original)
  - 1000-message chat: ~140KB (vs 560KB original)

### Browser Compatibility
- ✅ Chrome 88+
- ✅ Microsoft Edge 88+
- ✅ Brave Browser
- ✅ Opera 74+
- ❌ Firefox (planned for v1.2.0)
- ❌ Safari (investigating compatibility)

---

**Made with ❤️ by PT Meta Fin Tek**

*MyMories - Your AI conversations, preserved forever.*
