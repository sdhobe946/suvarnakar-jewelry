# 🌟 सुवर्णकार अलंकार केंद्र - Gold Jewelry Shop

A beautiful, responsive jewelry store website built for Risod's trusted 1 gram gold jewelry specialist.

## 🚀 Deployment on Vercel

### Step 1: Push to GitHub
1. Initialize git repository and push code to GitHub
2. Visit [vercel.com](https://vercel.com) and sign up (free)
3. Click "New Project" → Import your GitHub repository

### Step 2: Configure Environment Variables
In Vercel project settings → Environment Variables, add:

```
SHEET_ID = your_google_sheet_id_here
```

Get your Sheet ID from your Google Sheet URL:
```
https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit
```

### Step 3: Deploy
- Click "Deploy"
- Your site will be live at `your-project.vercel.app`

## 📋 Features

- 💎 Premium gold jewelry showcase
- 🌍 Bilingual (English + Marathi)
- 📱 Fully responsive design
- 🌙 Dark mode support
- 🔐 Admin control panel (Ctrl+Shift+A)
- 📊 Dynamic product management via Google Sheets
- ✨ Smooth animations & transitions

## 📁 Project Structure

```
.
├── index.html          # Main website
├── css/
│   └── styles.css      # All styling (2245 lines)
├── js/
│   └── script.js       # Business logic & admin panel (1745 lines)
├── vercel.json         # Vercel configuration
├── .vercelignore       # Files to exclude from deployment
└── README.md           # This file
```

## ⚙️ Configuration

Edit `js/script.js` to customize:
- Shop name, address, phone
- Owner information
- Default product categories
- Admin password

See [SETUP_GUIDE.md](SETUP_GUIDE.md) for Google Sheets setup instructions.

## 🔐 Admin Access

Press `Ctrl+Shift+A` on the website to access the admin panel.

Default admin password should be set in `script.js` → `CONFIG.ADMIN_PASSWORD`

## 📞 Support

For setup assistance, see `SETUP_GUIDE.md` for detailed Google Sheets integration instructions.
