# Astro Website (Frontend)

Landing page for Astrologer Satyam Awasthi – Vite + React + Tailwind. Payment via Razorpay payment links; post-payment emails via EmailJS.

## Prerequisites

- Node.js 18+

## Setup

From the repo root:

```bash
npm install
```

### Environment (EmailJS)

1. Copy `client/.env.example` if you need a reference; `client/.env` already exists.
2. In `client/.env`, replace the placeholders with your EmailJS values from [dashboard.emailjs.com](https://dashboard.emailjs.com):
   - **Service ID** (Email Services)
   - **Public Key** (Account)
   - **Admin Template ID** and **User Template ID** (Email Templates)

Create two EmailJS templates:

- **Admin:** To = `Beereshjiawasthi@gmail.com`, Subject = `{{subject}}`, Content = `{{html_content}}`
- **User:** To = `{{user_email}}`, Subject = `{{subject}}`, Content = `{{html_content}}`

Restart the dev server after changing `.env`.

## Run

```bash
npm run dev
```

- App: `http://localhost:5173`
- Thank-you page after payment: `http://localhost:5173/thank-you`

## Build

```bash
npm run build
```

Output is in `client/dist`.

## What’s included

- Landing page and lead form in `client/src/App.jsx`
- Payment: form redirects to Razorpay payment links (₹599 / ₹999 / ₹1,499)
- After payment, Razorpay redirects to `/thank-you`; admin and user emails are sent via EmailJS
- Email HTML templates in `client/src/emailTemplates.js`
