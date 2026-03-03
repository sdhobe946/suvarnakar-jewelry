# 🚀 Vercel Deployment Guide
## सुवर्णकार अलंकार केंद्र

Complete step-by-step guide to deploy your jewelry shop website on Vercel.

---

## Prerequisites

- GitHub account (https://github.com)
- Vercel account (https://vercel.com) - free plan available
- Your website code pushed to GitHub
- Google Sheet ID with your products (see SETUP_GUIDE.md)

---

## Step 1: Initialize Git & Push to GitHub

### 1.1 Initialize Git repository
```powershell
cd "d:\abhi chakotkar"
git init
git add .
git commit -m "Initial commit: Gold jewelry shop website"
```

### 1.2 Create GitHub repository
1. Go to https://github.com/new
2. Create a new repository (e.g., `suvarnakar-jewelry-shop`)
3. Don't initialize with README (we already have one)

### 1.3 Push your code to GitHub
```powershell
git remote add origin https://github.com/YOUR_USERNAME/suvarnakar-jewelry-shop.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy on Vercel

### 2.1 Sign up / Login to Vercel
1. Visit https://vercel.com
2. Click "Sign Up" (use GitHub account for easy integration)
3. Authorize Vercel to access your GitHub

### 2.2 Import Your Project
1. Click **"New Project"** (or go to https://vercel.com/new)
2. Select your GitHub repository `suvarnakar-jewelry-shop`
3. Click **"Import"**

### 2.3 Configure Project Settings
Keep default settings and click **"Continue"**:
- Framework: `Other` (it auto-detects as static)
- Build Command: (leave empty)
- Output Directory: (leave empty)

### 2.4 Add Environment Variables
**Before clicking "Deploy", add your environment variables:**

1. Look for **"Environment Variables"** section
2. Add these variables:

| Name | Value | 
|------|-------|
| `SHEET_ID` | Your Google Sheet ID (e.g., `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms`) |

**How to get your Sheet ID:**
- Open your Google Sheet
- Copy the URL: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit`
- Extract `YOUR_SHEET_ID_HERE` and paste it

### 2.5 Deploy
1. Click **"Deploy"**
2. Wait for deployment to complete (usually 1-2 minutes)
3. You'll get a live URL like: `https://suvarnakar-jewelry-shop.vercel.app`

✅ **Your website is now live!**

---

## Step 3: Configure Your Google Sheet

### 3.1 Make Sheet Public
1. Open your Google Sheet
2. Click **"Share"** (top right)
3. Change access to **"Anyone with the link"**
4. Role: **"Viewer"**
5. Click **"Done"**

### 3.2 Add Products to Your Sheet
Follow these instructions from [SETUP_GUIDE.md](SETUP_GUIDE.md):

**Column Headers (Row 1):**
```
category | name | name_mr | price | image_url | badge | phone
```

**Example Product Row:**
```
product | Elegant Gold Necklace | सोन्याचे हार | ₹2,500 | https://drive.google.com/uc?export=view&id=YOUR_FILE_ID | 1GM Gold | 7063857641
```

---

## Step 4: Update Products

### 4.1 Update via Google Sheet (Recommended)
1. Edit your Google Sheet
2. Add/update product rows
3. Refresh your website
4. Products appear automatically ✨

### 4.2 Update Admin Panel
1. Visit your deployed site
2. Press `Ctrl+Shift+A` to open admin login
3. Enter admin password
4. Click "Featured" tab to manage products

---

## Troubleshooting

### ❌ Sheet not loading
**Solution:**
1. Make sure Sheet is **publicly shared** (Anyone with link)
2. Verify `SHEET_ID` is set correctly in Vercel environment variables
3. Reload the page (Ctrl+Shift+R to hard refresh)

### ❌ Images not showing
**Solution:**
1. Verify image URLs in Google Drive are shared publicly
2. Use the correct format: `https://drive.google.com/uc?export=view&id=FILE_ID`
3. Try uploading to Imgur or another image service instead

### ❌ Admin panel not accessible
**Solution:**
1. Check admin password in `js/script.js`
2. Make sure Ctrl+Shift+A is pressed (case-sensitive)
3. Check browser console for errors (F12)

### ❌ Changes not appearing
**Solution:**
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Wait 1-2 minutes for Vercel cache to update

---

## Updating Code on Vercel

### Make changes locally
```powershell
cd "d:\abhi chakotkar"
# Edit files...
git add .
git commit -m "Update: [description of changes]"
git push
```

Vercel will **automatically redeploy** when you push to GitHub! ✨

---

## Domain Setup (Optional)

### Connect Custom Domain
1. Go to Vercel Project Settings → **Domains**
2. Enter your custom domain (e.g., `suvarnakar.com`)
3. Follow DNS instructions for your domain registrar

---

## Useful Links

- 📖 [Vercel Documentation](https://vercel.com/docs)
- 🔧 [Vercel CLI](https://vercel.com/docs/cli) - Deploy from command line
- 📊 [Google Sheets API](https://developers.google.com/sheets/api)
- 🍻 Google Drive Image Hosting Guide - See SETUP_GUIDE.md

---

## Environment Variables Reference

### .env.example
```
SHEET_ID=your_google_sheet_id_here
```

### Available Config Variables (in script.js)
```javascript
CONFIG.SHEET_ID              // Google Sheet ID
CONFIG.SHOP_NAME             // Store name
CONFIG.PHONE_PRIMARY         // Primary contact
CONFIG.PHONE_SECONDARY       // Secondary contact
CONFIG.OWNER_NAME            // Owner name
```

---

## Support & Questions

If you encounter issues:
1. Check browser console (F12 → Console tab)
2. Verify Google Sheet is public
3. Ensure SHEET_ID environment variable is set
4. Check Vercel deployment logs (Project → Deployments)

Happy selling! 💎✨
