# 🤰 Pregnancy Week Calculator

A beautiful, multilingual pregnancy calculator with AI-powered insights to help expectant mothers track their pregnancy journey.

![Pregnancy Calculator](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![Languages](https://img.shields.io/badge/Languages-4-orange)

## ✨ Features

### 📅 Pregnancy Tracking
- **Accurate Calculations**: Calculates pregnancy weeks, days, and trimester based on Last Menstrual Period (LMP)
- **Due Date Estimation**: Provides estimated due date (280 days from LMP)
- **Custom Date Picker**: Beautiful iOS-style date picker with Day/Month/Year inputs
- **Input Validation**: Prevents future dates and validates reasonable pregnancy duration (0-42 weeks)

### 🌍 Multilingual Support
Support for 4 languages with complete translations:
- 🇬🇧 **English**
- 🇮🇳 **Hindi (हिंदी)** - Devanagari script
- 🇸🇦 **Arabic (العربية)** - Right-to-left layout
- 🇵🇰 **Urdu (اردو)** - Right-to-left layout

### 🤖 AI-Powered Insights
- **Baby Development**: Week-specific information about fetal development
- **Size Comparisons**: Fun comparisons to fruits/vegetables
- **Developmental Milestones**: 4-5 key milestones for each week
- **Exercise Recommendations**: Safe, trimester-specific exercise suggestions
- **Localized Content**: All AI-generated content in the selected language

### 🎨 Beautiful Design
- **Pink/Purple Color Scheme**: Elegant gradient design
- **Responsive Layout**: Works perfectly on mobile and desktop
- **Smooth Animations**: Engaging slide-in and fade effects
- **RTL Support**: Proper right-to-left layout for Arabic and Urdu
- **Custom Components**: Beautiful date picker, cards, and interactive elements



### English Interface
<!-- Add screenshot here -->

### Arabic Interface (RTL)
<!-- Add screenshot here -->

### AI-Powered Insights
<!-- Add screenshot here -->

## 🛠️ Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **AI Integration**: Anthropic Claude API (Sonnet 4)
- **Fonts**: Google Fonts (Source Sans Pro)
- **Icons**: Unicode Emojis
- **No Framework Required**: Vanilla JavaScript for maximum compatibility

## 📦 Installation

### Option 1: GitHub Pages (Recommended)
1. Fork this repository
2. Go to repository Settings → Pages
3. Select `main` branch as source
4. Your site will be published at `https://yourusername.github.io/pregnancy-calculator/`

### Option 2: Local Development
1. Clone the repository:
```bash
git clone https://github.com/yourusername/pregnancy-calculator.git
cd pregnancy-calculator
```

2. Open `index.html` in your browser:
```bash
# Using Python
python -m http.server 8000

# Using PHP
php -S localhost:8000

# Or simply open index.html in your browser
```

3. Visit `http://localhost:8000`

## 🔑 API Configuration

This project uses the Anthropic Claude API for AI-powered insights. The API calls are made client-side without requiring an API key for demonstration purposes.

**Note**: For production use, you should:
1. Implement a backend proxy to securely handle API calls
2. Add your Anthropic API key server-side
3. Never expose API keys in client-side code

## 📖 Usage

1. **Select Language**: Click the language selector in the top-right corner
2. **Enter LMP Date**: Click on the date field to open the custom date picker
3. **Calculate**: Click "Calculate Pregnancy Week" button
4. **View Results**:
   - Pregnancy progress (weeks and days)
   - Trimester information
   - Estimated due date
   - AI-generated baby development insights
   - Recommended exercises for your stage

## 🌐 Supported Languages

| Language | Code | Direction | Script |
|----------|------|-----------|--------|
| English | en | LTR | Latin |
| Hindi | hi | LTR | Devanagari |
| Arabic | ar | RTL | Arabic |
| Urdu | ur | RTL | Urdu/Arabic |

## 🎯 Features in Detail

### Date Localization
- Dates formatted according to language locale
- Month names translated
- Number systems adapted (e.g., Arabic numerals for Arabic)

### RTL (Right-to-Left) Support
- Complete layout flip for Arabic and Urdu
- Date picker order reverses (Day-Month-Year from right to left)
- All UI elements properly mirrored
- Language selector position adapts

### AI-Powered Content
- **Baby Development**: Size, weight, and developmental milestones
- **Exercise Recommendations**: 4-5 safe exercises per trimester
- **Trimester-Specific**: Content adapts to pregnancy stage
- **Multilingual**: AI generates content in selected language

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Zeeshan**

Made with ❤️ by Zeeshan

## 🙏 Acknowledgments

- Anthropic Claude API for AI-powered insights
- Google Fonts for Source Sans Pro font
- All the expectant mothers who inspired this project

## ⚠️ Disclaimer

This calculator provides estimates and should not replace professional medical advice. Always consult with your healthcare provider for accurate pregnancy tracking and medical guidance.

## 📞 Support

If you have any questions or need help, please open an issue in the GitHub repository.

---

**Star ⭐ this repository if you find it helpful!**
