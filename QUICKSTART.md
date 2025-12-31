# 🚀 Quick Start Guide

Get your Pregnancy Calculator live in 5 minutes!

## Files Included

```
pregnancy-calculator/
├── index.html           # Main application file
├── README.md            # Project documentation
├── LICENSE              # MIT License
├── CONTRIBUTING.md      # Contribution guidelines
├── DEPLOYMENT.md        # Detailed deployment guide
├── QUICKSTART.md        # This file
└── .gitignore          # Git ignore rules
```

## Option 1: GitHub Pages (Recommended) - 5 Minutes

### 1️⃣ Create GitHub Repository
- Go to https://github.com/new
- Name: `pregnancy-calculator`
- Visibility: **Public**
- Click "Create repository"

### 2️⃣ Upload Files
- Click "uploading an existing file"
- Drag all files from this folder
- Commit changes

### 3️⃣ Enable GitHub Pages
- Go to **Settings** → **Pages**
- Source: Branch `main`, Folder `/ (root)`
- Click **Save**

### 4️⃣ Access Your Site
- Wait 2-3 minutes
- Visit: `https://YOUR-USERNAME.github.io/pregnancy-calculator/`

✅ Done! Your site is live!

## Option 2: Local Testing - 1 Minute

### Using Python (Easiest)
```bash
cd pregnancy-calculator
python -m http.server 8000
```
Visit: http://localhost:8000

### Using PHP
```bash
cd pregnancy-calculator
php -S localhost:8000
```
Visit: http://localhost:8000

### Or Just Open
Simply open `index.html` in your browser!

## Features Overview

✨ **Multilingual**: 4 languages (English, Hindi, Arabic, Urdu)
📅 **Date Picker**: Custom iOS-style picker
🤖 **AI-Powered**: Baby development insights
🧘‍♀️ **Exercise Tips**: Safe pregnancy exercises
🌍 **RTL Support**: Proper Arabic/Urdu layout
📱 **Responsive**: Works on all devices

## Next Steps

1. ⭐ Star the repository
2. 🔄 Share with friends
3. 🐛 Report issues on GitHub
4. 💡 Suggest features
5. 🤝 Contribute improvements

## Support

- 📖 Read the full [README.md](README.md)
- 🚀 Check [DEPLOYMENT.md](DEPLOYMENT.md) for details
- 🤝 See [CONTRIBUTING.md](CONTRIBUTING.md) to contribute
- ❓ Open an issue on GitHub for questions

## Important Notes

⚠️ **API Usage**: This uses Anthropic Claude API. For production:
- Implement backend proxy for API calls
- Never expose API keys in client-side code
- Consider rate limiting

📱 **Testing**: Test on:
- Multiple browsers (Chrome, Firefox, Safari)
- Mobile devices
- All language options
- RTL layout (Arabic/Urdu)

---

Made with ❤️ by Zeeshan

**Need help?** Open an issue on GitHub!
