# 📋 Google Sheet Setup Guide
## सुवर्णकार अलंकार केंद्र — Dynamic Content Management

---

## STEP 1 — Create Your Google Sheet

Go to: https://sheets.google.com → Create a new spreadsheet.

**Add these exact column headers in Row 1:**

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| category | name | name_mr | price | image_url | badge | phone |

---

## STEP 2 — Add Your Products

### For jewellery products (shown in slider):
Set `category` = **product**

| category | name | name_mr | price | image_url | badge | phone |
|---|---|---|---|---|---|---|
| product | Elegant Gold Necklace | सोन्याचे हार | ₹2,500 | https://drive.google.com/uc?export=view&id=YOUR_FILE_ID | 1GM Gold | 9511825911 |
| product | Designer Gold Ring | सोन्याची अंगठी | Call for Price | | New Arrival | |
| product | Gold Bangles | सोन्याच्या बांगड्या | ₹1,800 | https://... | Popular | |

### For wedding collection (shown in grid):
Set `category` = **wedding**

| category | name | name_mr | price | image_url | badge | phone |
|---|---|---|---|---|---|---|
| wedding | Bridal Necklace Set | लग्नाचा हार | | https://... | | |
| wedding | Wedding Ring Pair | लग्नाची अंगठी | | https://... | | |

---

## STEP 3 — Add Images from Google Drive

1. Upload jewellery photos to Google Drive
2. Right-click the image → **Share** → **Anyone with the link → Viewer**
3. Copy the link, which looks like:  
   `https://drive.google.com/file/d/1AbCdEf.../view`
4. Convert it to a direct image URL by replacing the link with:  
   `https://drive.google.com/uc?export=view&id=1AbCdEf...`
5. Paste this into the `image_url` column

---

## STEP 4 — Publish the Sheet

1. Click **Share** (top right)
2. Change access to **"Anyone with the link"**
3. Set role to **"Viewer"**
4. Click **Done**

---

## STEP 5 — Get Your Sheet ID

Your sheet URL looks like this:
```
https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms/edit
```

The Sheet ID is the long string between `/d/` and `/edit`:
```
1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms
```

---

## STEP 6 — Connect to the Website

1. Open `index.html` in your browser
2. Click the **"Connect Sheet"** button in the top navigation
3. Paste your Sheet ID
4. Click **Connect** ✅

The website will **automatically load all your products and images** from the sheet.

---

## 💡 Tips

- Leave `price` empty or write `Call for Price` for items with no fixed price
- Leave `image_url` empty if you don't have a photo yet — an emoji placeholder will show
- Leave `phone` empty to use the default business numbers
- The `badge` column shows a small label on the product (e.g. "New", "1GM Gold", "Popular")
- **To update products:** Just edit the Google Sheet — refresh the website and changes appear instantly

---

## 📐 Recommended Sheet Column Explanation

| Column | Required | Example Values |
|---|---|---|
| category | ✅ | `product` or `wedding` |
| name | ✅ | `Elegant Gold Necklace` |
| name_mr | Optional | `सोन्याचे हार` |
| price | Optional | `₹2,500` or `Call for Price` |
| image_url | Optional | `https://drive.google.com/uc?export=view&id=...` |
| badge | Optional | `1GM Gold`, `New`, `Popular`, `Bridal` |
| phone | Optional | `9511825911` (overrides default) |
