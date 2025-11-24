# 🚀 Deploy Your Portfolio to sifat-portfolio.me

## Step 1: Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial portfolio commit"
```

## Step 2: Create GitHub Repository
1. Go to https://github.com/sifat-oss
2. Click "New" repository button
3. Name it: **portfolio**
4. Keep it **Public**
5. Don't add README, .gitignore, or license
6. Click "Create repository"

## Step 3: Connect & Push to GitHub
```bash
git remote add origin https://github.com/sifat-oss/portfolio.git
git branch -M main
git push -u origin main
```

## Step 4: Install Deployment Package
```bash
npm install --save-dev gh-pages
```

## Step 5: Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
- Build your portfolio
- Create a `gh-pages` branch
- Push the built files to GitHub
- Your site will be live in 1-2 minutes!

## Step 6: Enable GitHub Pages (One-time setup)
1. Go to https://github.com/sifat-oss/portfolio/settings/pages
2. Under "Source", select: **Deploy from a branch**
3. Under "Branch", select: **gh-pages** and **/root**
4. Click "Save"

## 🌐 Your Portfolio URLs
Your portfolio will be live at:
- **Primary**: https://sifat-portfolio.me (custom domain)
- **Backup**: https://sifat-oss.github.io/portfolio/

## Step 6: Configure Custom Domain (sifat-portfolio.me)

### A. In GitHub Pages Settings:
1. Go to https://github.com/sifat-oss/portfolio/settings/pages
2. Under "Source", select: **Deploy from a branch**
3. Under "Branch", select: **gh-pages** and **/root**
4. In "Custom domain" field, enter: **sifat-portfolio.me**
5. Click "Save"
6. Check "Enforce HTTPS" (after DNS propagates)

### B. In Your Domain Provider:
Go to your domain registrar (where you bought sifat-portfolio.me) and add these DNS records:

**For root domain:**
```
Type: A    | Name: @   | Value: 185.199.108.153
Type: A    | Name: @   | Value: 185.199.109.153
Type: A    | Name: @   | Value: 185.199.110.153
Type: A    | Name: @   | Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME | Name: www | Value: sifat-oss.github.io
```

### C. Wait for DNS Propagation:
- Takes 5-60 minutes (sometimes up to 24 hours)
- Check status: https://www.whatsmydns.net/
- Once propagated, your site will be live at https://sifat-portfolio.me

## 📝 Future Updates
Whenever you make changes:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

## 🎯 Domain Information
Your custom domain **sifat-portfolio.me** is configured with CNAME file.

**Where to buy domain (if you haven't):**
- Namecheap: https://www.namecheap.com
- GoDaddy: https://www.godaddy.com
- Cloudflare: https://www.cloudflare.com/products/registrar/
- Google Domains: https://domains.google

**Cost**: ~$10-15/year for .me domain

## 🔧 Troubleshooting

### If deployment fails:
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm run deploy
```

### If 404 error on routes:
- Already configured! HashRouter is set up for GitHub Pages

### If images don't load:
- All images use absolute paths from `/public` folder
- Already configured with base path

## ✅ What's Been Configured

✓ GitHub Pages deployment scripts added
✓ Base path set to `/portfolio/`
✓ Build configuration optimized
✓ All routes will work correctly
✓ Images and assets will load properly

## 🎉 You're Ready!

Just run these commands:
```bash
# Install gh-pages
npm install

# Deploy to GitHub Pages
npm run deploy
```

Your portfolio will be live at: **https://sifat-oss.github.io/portfolio/**

---

## 📱 Share Your Portfolio

Once live, share it on:
- LinkedIn: https://www.linkedin.com/in/md-sifat-hossain-4854a0244/
- Facebook: https://www.facebook.com/shahriarahmedsif
- Resume (update with live link)
- Email signature

## 💰 Start Getting Clients!

Your portfolio is now:
✅ Live and accessible worldwide
✅ Shows your pricing (৳15,000+)
✅ Has contact form for quotes
✅ Professional and modern design
✅ Mobile-responsive
✅ SEO-optimized

Start sharing and get your first client! 🚀
