# Deploy Astro Website to cPanel (palmreading.astrosatyam.in)

Follow these steps to put your site live inside **palmreading.astrosatyam.in** on cPanel.

---

## Step 1: Build the website on your computer

On your Mac, in Terminal:

1. Open the project folder:
   ```bash
   cd "/Volumes/TechSSD/Dbuzzz projects/Astro Website"
   ```
2. Build for production:
   ```bash
   npm run build
   ```
3. The built files will be in **`client/dist`** (index.html, assets folder, .htaccess).

---

## Step 2: Zip the built files

1. Open **Finder** and go to:  
   `Astro Website` → **client** → **dist**
2. Select **everything inside** `dist` (index.html, assets folder, .htaccess).
   - Do **not** zip the `dist` folder itself — zip only its contents.
3. Right‑click → **Compress** (or File → Compress).
4. Name the zip something like **`palmreading-site.zip`**.

You should have one zip file containing:
- `index.html`
- `assets/` (folder with .js, .css, images)
- `.htaccess`

---

## Step 3: Log in to cPanel

1. Go to: **https://www.genxwhosting.com/clientarea.php**
2. Log in with your hosting account (email and password).
3. Open **cPanel** (from the hosting dashboard).
4. In cPanel, open **File Manager**.

---

## Step 4: Go to the palmreading folder

1. In the left sidebar, click **`public_html`** to expand it.
2. Click the folder **`palmreading.astrosatyam.in`**.
3. The right side should show the contents of that folder (it may be empty or have old files).

---

## Step 5: Clear old site files (if any)

If there are already files from a previous deployment:

1. Select all files and folders in the right pane (Ctrl+A or Cmd+A, or select each).
2. Click **Delete** and confirm.
3. Leave the folder **empty** (you will upload the new zip here).

---

## Step 6: Upload the zip

1. With **`palmreading.astrosatyam.in`** still open in the right pane, click **Upload** (top toolbar).
2. Click **Select File** and choose your **`palmreading-site.zip`** (the one you made from `client/dist` contents).
3. Wait until the upload finishes (progress bar or “Upload complete”).
4. Go back to **File Manager** (breadcrumb or left tree).
5. Open **`public_html`** → **`palmreading.astrosatyam.in`** again.
6. You should see **`palmreading-site.zip`** in the list.

---

## Step 7: Extract the zip

1. Select **`palmreading-site.zip`** (tick the checkbox).
2. Click **Extract** (top toolbar).
3. In the dialog, the path should end with **`/palmreading.astrosatyam.in`**. Click **Extract**.
4. After extraction, you should see:
   - **index.html**
   - **assets** (folder)
   - **.htaccess**
5. Optionally select **`palmreading-site.zip`** and click **Delete** to remove the zip and save space.

---

## Step 8: Set correct base URL (if needed)

Your site should work at:

**https://palmreading.astrosatyam.in/**

If your hosting shows the site at a different path (e.g. **https://yoursite.com/palmreading/**), tell your developer so they can set the correct “base” in the build and you may need to re‑build and re‑upload.

---

## Step 9: Check the site

1. Open a browser and go to: **https://palmreading.astrosatyam.in**
2. You should see your Astro landing page.
3. Test:
   - Click through the page.
   - Open **https://palmreading.astrosatyam.in/thank-you** — it should load (not 404). The .htaccess file makes this work.

---

## Important: Environment variables (EmailJS)

The build does **not** include your **.env** file (it is ignored for security). So on the live site, EmailJS will not work until you set the same variables on the server.

**Option A – Build with production env (recommended)**  
- Put your **real** EmailJS values in **`client/.env`** (only on your computer, do not commit this file).
- Run **`npm run build`** again. Vite will bake `VITE_EMAILJS_*` into the JavaScript.
- Upload the **new** `client/dist` contents (as a new zip) and replace the files in **`palmreading.astrosatyam.in`** (Steps 2, 5, 6, 7).

**Option B – No server env**  
- If you don’t do the above, the site will work but “Thank you” emails (EmailJS) will not be sent from the live site.

---

## Quick checklist

- [ ] Run `npm run build` in the project.
- [ ] Zip the **contents** of `client/dist` (not the `dist` folder).
- [ ] Log in to cPanel → File Manager.
- [ ] Open **public_html** → **palmreading.astrosatyam.in**.
- [ ] Delete old files (if any).
- [ ] Upload the zip.
- [ ] Extract in **palmreading.astrosatyam.in**.
- [ ] Visit **https://palmreading.astrosatyam.in** and test.
- [ ] (Optional) Re‑build with real .env and re‑upload so EmailJS works on live.

---

## If something goes wrong

- **404 on /thank-you:** Make sure **.htaccess** was uploaded and extracted (it’s a hidden file; in File Manager enable “Show Hidden Files” if needed).
- **Blank page:** Check the browser Console (F12) for errors; often it’s a wrong base path or missing assets.
- **Razorpay / payment:** Confirm your Razorpay payment links use **https://palmreading.astrosatyam.in/thank-you** as the success redirect URL.
