# 🚀 Vercel Deployment Guide

Complete guide to deploy your Pregnancy Calculator on Vercel with AI features.

## 📋 Prerequisites

- GitHub account
- Vercel account (free) - [Sign up here](https://vercel.com/signup)
- Anthropic API key (optional) - [Get one here](https://console.anthropic.com/)

## 🎯 Quick Deploy (5 Minutes)

### Step 1: Push to GitHub

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `pregnancy-calculator`
3. Upload all files from this folder
4. Commit changes

### Step 2: Import to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New"** → **"Project"**
3. Click **"Import Git Repository"**
4. Select your `pregnancy-calculator` repository
5. Click **"Import"**

### Step 3: Configure (Optional - for AI features)

**Without API Key:**
- The app will work with fallback data
- All features functional, but AI content is static

**With API Key (Recommended):**
1. In the import screen, click **"Environment Variables"**
2. Add:
   - Name: `ANTHROPIC_API_KEY`
   - Value: Your API key from https://console.anthropic.com/
3. Click **"Add"**

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait 1-2 minutes
3. Your site is live! 🎉

Your URL will be: `https://pregnancy-calculator-[random].vercel.app`

## 🔑 Getting Anthropic API Key

### Option 1: Free Trial (Recommended for Testing)

1. Go to [Anthropic Console](https://console.anthropic.com/)
2. Sign up for free account
3. Get $5 free credits
4. Go to **API Keys** section
5. Click **"Create Key"**
6. Copy your API key
7. Add to Vercel environment variables

### Option 2: Without API Key

The app works perfectly without an API key using high-quality fallback data:
- ✅ All UI features work
- ✅ Calculations accurate
- ✅ Multilingual support
- ✅ Exercise recommendations
- ✅ Baby development info (static but comprehensive)

## 📝 Project Structure

```
pregnancy-calculator/
├── api/
│   ├── baby-development.js       # Serverless function for baby data
│   └── exercise-recommendations.js # Serverless function for exercises
├── index.html                    # Main application
├── vercel.json                   # Vercel configuration
├── .env.example                  # Environment variables template
├── README.md                     # Project documentation
├── DEPLOYMENT.md                 # General deployment guide
└── QUICKSTART.md                 # Quick start guide
```

## 🔧 How It Works

### Serverless Functions
- Located in `/api` folder
- Automatically deployed by Vercel
- Handle API calls securely
- Return JSON responses

### API Flow
```
Frontend (index.html)
    ↓
    → POST /api/baby-development
    → POST /api/exercise-recommendations
    ↓
Serverless Functions
    ↓
    → Check for ANTHROPIC_API_KEY
    ↓
If API Key exists:
    → Call Anthropic Claude API
    → Return AI-generated content
If no API Key:
    → Return fallback data (static)
```

## 🛠️ Local Development

### 1. Install Vercel CLI

```bash
npm install -g vercel
```

### 2. Run Locally

```bash
cd pregnancy-calculator
vercel dev
```

Visit: http://localhost:3000

### 3. Test Serverless Functions

```bash
# Test baby development endpoint
curl -X POST http://localhost:3000/api/baby-development \
  -H "Content-Type: application/json" \
  -d '{"weeks": 20, "days": 3, "language": "en"}'

# Test exercise recommendations endpoint
curl -X POST http://localhost:3000/api/exercise-recommendations \
  -H "Content-Type: application/json" \
  -d '{"weeks": 20, "days": 3, "language": "en"}'
```

## 🔄 Updating Your Deployment

### Method 1: Git Push (Recommended)

```bash
# Make changes to your code
git add .
git commit -m "Update: description of changes"
git push origin main
```

Vercel automatically redeploys! (takes 1-2 minutes)

### Method 2: Vercel CLI

```bash
vercel --prod
```

## 🌍 Custom Domain

1. Go to your project on Vercel
2. Click **Settings** → **Domains**
3. Click **"Add"**
4. Enter your domain (e.g., `pregnancy.yourdomain.com`)
5. Follow DNS configuration instructions
6. Wait for DNS propagation (up to 24 hours)

## 🐛 Troubleshooting

### AI Content Not Showing

**Check 1: API Key**
- Go to Vercel project → Settings → Environment Variables
- Verify `ANTHROPIC_API_KEY` is set
- Redeploy if you just added it

**Check 2: Function Logs**
- Go to Vercel project → Deployments
- Click on latest deployment → Function Logs
- Check for errors

**Check 3: Network**
- Open browser DevTools (F12)
- Check Network tab
- Look for `/api/baby-development` and `/api/exercise-recommendations`
- Check response

### Functions Timeout

If you see timeout errors:
- API calls are limited to 10 seconds (configured in vercel.json)
- Fallback data will be returned automatically
- This is normal and the app still works

### CORS Errors

Already configured! If you still see CORS errors:
- Clear browser cache
- Redeploy on Vercel
- Check vercel.json has correct headers

## 💡 Tips

1. **Free Tier**: Vercel free tier is generous
   - 100GB bandwidth/month
   - Unlimited serverless function invocations
   - Automatic HTTPS

2. **Environment Variables**: 
   - Can be different for Preview vs Production
   - Use Production for your API key
   - Leave Preview without key for testing

3. **Analytics**:
   - Enable Vercel Analytics for visitor tracking
   - Free on all plans

## 📊 Monitoring

### Vercel Dashboard
- Real-time deployment status
- Function invocation logs
- Error tracking
- Performance metrics

### Check Function Status
```bash
# View recent deployments
vercel ls

# View function logs
vercel logs
```

## 🔒 Security Best Practices

1. ✅ Never commit API keys to Git
2. ✅ Use environment variables in Vercel
3. ✅ Enable HTTPS (automatic on Vercel)
4. ✅ Serverless functions hide API key from client
5. ✅ CORS properly configured

## 💰 Cost Estimation

### Without API Key
- **Cost**: $0/month
- Uses Vercel free tier
- Fallback data only

### With Anthropic API
- **Vercel**: $0/month (free tier sufficient)
- **Anthropic API**: Pay per use
  - ~$0.003 per request
  - $5 free credits = ~1,600 requests
  - 1,000 users × 2 requests = ~$6/month

## 📞 Support

- **Vercel Issues**: [Vercel Documentation](https://vercel.com/docs)
- **API Issues**: [Anthropic Documentation](https://docs.anthropic.com/)
- **Project Issues**: Open an issue on GitHub

## ✅ Checklist

- [ ] Repository pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] Environment variable added (optional)
- [ ] Deployment successful
- [ ] AI features tested
- [ ] Custom domain configured (optional)

---

🎉 **Congratulations!** Your Pregnancy Calculator is now live on Vercel with serverless AI integration!

**Your deployment should show:**
- ✅ All UI features working
- ✅ Date calculations accurate
- ✅ Multilingual support functional
- ✅ AI content (if API key configured)
- ✅ Or fallback data (if no API key)
