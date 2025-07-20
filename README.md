# MyMories v1.0.0

**Save LLM chats as portable .txt files with up to 75% compression.**

MyMories is a privacy-first AI chat backup tool by Metafintek.com that allows you to save your conversations from popular LLM platforms as compressed, portable text files. Keep your valuable AI interactions organized and accessible forever.

## 🚀 Features

- **🔥 Enhanced Multi-Layer Compression**: Dictionary + Symbolic + VSM achieves up to 75% size reduction for maximum token efficiency.
- **🎯 Multi-Platform Support**: Extract conversations from ChatGPT, Claude, Google Gemini, Kimi, and Grok.
- **🌐 Universal Compatibility**: Drag and drop your exported .txt file into any major LLM to restore the context and continue the conversation.
- **🔒 Privacy-First**: All processing happens locally on your device. No data is ever sent to external servers.
- **💡 Flexible Export Options**:
    - Save a highly compressed `.txt` file for portability and efficiency.
    - Save a full, uncompressed `.json` file as a complete backup with all original metadata.
- **🔄 Source Override**: Manually select the source platform if auto-detection fails.
- **⚡ On-Demand Activation**: Zero background overhead. The extension only runs when you click on it.
- **✍️ Web Content Archiving**: Save the text content of any webpage, not just chats.


## 📦 Installation

### From Chrome Web Store (Recommended)
1.  Visit the Chrome Web Store page for "MyMories".
2.  Click "Add to Chrome".

### Manual Installation (Developer Mode)
1.  Download the extension files from the GitHub repository.
2.  Open Chrome and navigate to `chrome://extensions/`.
3.  Enable "Developer mode" in the top right.
4.  Click "Load unpacked" and select the extension folder.


## 🛠️ Usage

1.  Navigate to a supported AI chat platform (like chat.openai.com or claude.ai).
2.  Make sure you have a conversation visible on the page.
3.  Click the MyMories icon in your browser toolbar.
4.  Choose your export options using the toggles:
    - **Enhanced Compression**: Check this for the smallest possible file size (up to 75% smaller).
    - **Also save Full JSON**: Check this to get an additional, uncompressed backup file.
5.  Click the "Save Chat as TXT" button to download your file(s).


### Supported Platforms

-   **✅ Full Support**: ChatGPT, Claude, Google Gemini, Kimi, Grok.
-   **⚠️ Limited Support** (Visible text extraction): Perplexity, DeepSeek, Poe.

## 🔧 Technical Details

### Permissions Required
-   **activeTab**: To read content from the current AI chat page when you activate the extension.
-   **downloads**: To save the exported `.txt` and `.json` files to your Downloads folder.
-   **scripting**: To inject the content script needed for chat extraction when you click the button.

### Privacy & Security
-   **No Data Collection**: Zero telemetry or analytics are collected.
-   **Local Processing**: All compression and data handling happens on your device.
-   **No Server Communication**: The extension works entirely offline.
-   **Open Source**: Code is available for audit and contribution.

## 🔮 Roadmap

### Upcoming Features
-   [ ] Export to PDF format
-   [ ] Advanced in-extension search and filtering of saved chats
-   [ ] Conversation tagging system
-   [ ] Cloud sync options (optional and opt-in)
-   [ ] Bulk export and date-range filtering

---

**Made with ❤️ by PT Meta Fin Tek**

*MyMories - Your AI conversations, preserved forever.*