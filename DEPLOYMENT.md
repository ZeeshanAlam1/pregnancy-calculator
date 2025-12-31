# 🚀 Deployment Guide

This guide will help you deploy the Pregnancy Week Calculator to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer (optional, can use GitHub web interface)

## Method 1: Using GitHub Web Interface (Easiest)

### Step 1: Create a New Repository

1. Go to [GitHub](https://github.com)
2. Click the "+" icon in the top-right corner
3. Select "New repository"
4. Repository settings:
   - **Name**: `pregnancy-calculator` (or any name you prefer)
   - **Description**: "A multilingual pregnancy calculator with AI-powered insights"
   - **Public**: Select "Public" (required for free GitHub Pages)
   - **Initialize**: Don't add README, .gitignore, or license (we have our own)
5. Click "Create repository"

### Step 2: Upload Files

1. On your new repository page, click "uploading an existing file"
2. Drag and drop all files from the `pregnancy-calculator-repo` folder:
   - `index.html`
   - `README.md`
   - `LICENSE`
   - `CONTRIBUTING.md`
   - `.gitignore`
3. Add commit message: "Initial commit"
4. Click "Commit changes"

### Step 3: Enable GitHub Pages

1. Go to your repository's **Settings** tab
2. Scroll down to **Pages** section (left sidebar)
3. Under "Source":
   - Branch: Select `main`
   - Folder: Select `/ (root)`
4. Click **Save**
5. Wait a few minutes for deployment
6. Your site will be live at: `https://yourusername.github.io/pregnancy-calculator/`

## Method 2: Using Git Command Line

### Step 1: Initialize Local Repository

```bash
cd pregnancy-calculator-repo
git init
git add .
git commit -m "Initial commit"
```

### Step 2: Create GitHub Repository

1. Create a new repository on GitHub (as described in Method 1, Step 1)
2. **Don't initialize** with README, .gitignore, or license

### Step 3: Push to GitHub

```bash
# Add remote repository
git remote add origin https://github.com/yourusername/pregnancy-calculator.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

Follow Method 1, Step 3 to enable GitHub Pages.

## Custom Domain (Optional)

If you have a custom domain:

1. In your repository, go to **Settings** → **Pages**
2. Under "Custom domain", enter your domain (e.g., `pregnancy.yourdomain.com`)
3. Click **Save**
4. In your domain's DNS settings, add a CNAME record:
   - Type: `CNAME`
   - Name: `pregnancy` (or your subdomain)
   - Value: `yourusername.github.io`
5. Wait for DNS propagation (can take up to 24 hours)

## Updating Your Site

### Using GitHub Web Interface

1. Navigate to the file you want to edit
2. Click the pencil icon (Edit)
3. Make your changes
4. Commit changes
5. GitHub Pages will automatically redeploy (takes 1-2 minutes)

### Using Git

```bash
# Make your changes to files
git add .
git commit -m "Description of changes"
git push origin main
```

GitHub Pages will automatically rebuild and deploy your changes.

## Troubleshooting

### Site Not Loading

- Wait 5-10 minutes after enabling GitHub Pages
- Check that the repository is public
- Verify the correct branch and folder are selected
- Clear your browser cache

### Changes Not Appearing

- GitHub Pages can take 1-2 minutes to rebuild
- Try hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Check the "Actions" tab to see build status

### 404 Error

- Ensure `index.html` is in the root directory
- Check that GitHub Pages is enabled
- Verify the URL is correct

## Performance Tips

1. **Enable HTTPS**: In Settings → Pages, check "Enforce HTTPS"
2. **Add Caching**: GitHub Pages automatically caches static files
3. **Optimize Images**: If you add images later, compress them first

## Monitoring

- **GitHub Actions**: Check the "Actions" tab to see deployment status
- **Traffic**: In repository Insights → Traffic to see visitor stats

## Security Notes

⚠️ **Important**: The current implementation uses client-side API calls to Anthropic's Claude API. For production:

1. **Never commit API keys** to the repository
2. **Use environment variables** for sensitive data
3. **Implement a backend proxy** to secure API calls
4. Consider using Vercel, Netlify, or similar platforms for serverless functions

## Need Help?

- Check GitHub's [Pages documentation](https://docs.github.com/en/pages)
- Open an issue in the repository
- Review existing issues for solutions

---

🎉 Congratulations! Your pregnancy calculator is now live!
