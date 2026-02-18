# Native Builders — Next.js Website

Professional construction company website built with **Next.js 14** for excellent SEO and performance.

## 🎯 Key Features

✅ **SEO Optimized** — Server-side rendering, meta tags, structured data  
✅ **Centralized Data** — All content in `/src/lib/constants.js`  
✅ **Fast Performance** — Next.js App Router, optimized images  
✅ **Fully Responsive** — Mobile-first design  
✅ **Easy to Update** — Change phone numbers, services, projects in one file  

---

## 📁 Project Structure

```
native-builders-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout with SEO meta tags
│   │   ├── page.js             # Main homepage
│   │   └── globals.css         # Import all component styles
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Ticker.jsx
│   │   ├── Services.jsx        ← Uses SERVICES from constants
│   │   ├── About.jsx
│   │   ├── Stats.jsx
│   │   ├── Projects.jsx        ← Uses PROJECTS from constants
│   │   ├── Process.jsx         ← Uses PROCESS_STEPS from constants
│   │   ├── Testimonials.jsx    ← Uses TESTIMONIALS from constants
│   │   ├── Contact.jsx         ← Uses CONTACT from constants
│   │   ├── Footer.jsx
│   │   └── FloatButtons.jsx
│   ├── styles/
│   │   ├── globals.css         # Global CSS variables
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── Ticker.css
│   │   ├── Services.css
│   │   ├── About.css
│   │   ├── Stats.css
│   │   ├── Projects.css
│   │   ├── Process.css
│   │   ├── Testimonials.css
│   │   ├── Contact.css
│   │   ├── Footer.css
│   │   └── FloatButtons.css
│   └── lib/
│       └── constants.js        ← ⭐ ALL STATIC DATA HERE
├── public/
│   └── (add your images here)
├── package.json
├── next.config.js
└── README.md
```

---

## 🔧 Installation & Setup

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
http://localhost:3000
```

---

## 📝 How to Update Content

### **All content is in ONE file: `/src/lib/constants.js`**

### Update Phone Numbers
```javascript
export const CONTACT = {
  phones: [
    { number: '9843369116', display: '98433 69116', primary: true },
    { number: '9812898151', display: '98128 98151' },
    { number: '9833623809', display: '98336 23809' },
  ],
  // ...
}
```

### Update Email
```javascript
email: 'info@nativebuilders.in',
```

### Update Company Info
```javascript
export const COMPANY = {
  name: 'Native Builders',
  location: 'Delhi NCR, India',
  officeAddress: 'Native Builders Office, Delhi NCR, India',
  // ...
}
```

### Add/Edit Services
```javascript
export const SERVICES = [
  {
    id: 'construction',
    icon: '🏗️',
    num: '01',
    title: 'Construction & Supervision',
    desc: 'Full project execution...',
    tags: ['Residential', 'Commercial'],
  },
  // Add more services here
];
```

### Add/Edit Projects
```javascript
export const PROJECTS = [
  {
    id: 'sunrise-villa',
    title: 'Sunrise Villa',
    category: 'Residential',
    location: 'Sector 12, Delhi',
    status: 'Completed',
    emoji: '🏡',
    gradient: 'linear-gradient(145deg,#0B2563,#1A3FA0)',
  },
  // Add more projects here
];
```

### Add/Edit Testimonials
```javascript
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Homeowner — South Delhi',
    avatar: '👨',
    rating: 5,
    text: 'Native Builders transformed our vision...',
  },
  // Add more testimonials here
];
```

---

## 🌐 SEO Configuration

Update SEO metadata in `/src/lib/constants.js`:

```javascript
export const SEO = {
  title: 'Native Builders | Construction & Design Experts Delhi NCR',
  description: 'Leading construction company in Delhi NCR...',
  keywords: 'construction company delhi ncr, builders...',
  ogImage: '/og-image.jpg',
};
```

Then add an Open Graph image to `/public/og-image.jpg` (1200x630px recommended).

---

## 📦 Build for Production

```bash
# Build optimized production bundle
npm run build

# Start production server
npm start
```

---

## 🚀 Deployment

### Option 1: Vercel (Recommended — Free)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repo
3. Build command: `npm run build`
4. Publish directory: `.next`

### Option 3: Self-Hosted
```bash
npm run build
npm start
```

Runs on `http://localhost:3000` by default.

---

## 🎨 Color Theme

The site uses a professional **white/blue/gold** color scheme:

- **Primary Blue**: `#1A3FA0` (brand color)
- **Gold Accent**: `#D4A017` (buttons, highlights)
- **White/Light**: `#FFFFFF`, `#F7F9FC` (backgrounds)
- **Text**: `#2D3D5C`, `#637899` (body text)

Update colors in `/src/styles/globals.css`:

```css
:root {
  --blue: #1A3FA0;
  --gold: #D4A017;
  /* ... */
}
```

---

## 📱 Components Overview

| Component | Data Source | Purpose |
|---|---|---|
| **Navbar** | `NAV_LINKS` | Sticky navigation with smooth scroll |
| **Hero** | `HERO_STATS`, `COMPANY` | Full-screen hero with stats |
| **Ticker** | `TICKER_ITEMS` | Animated services strip |
| **Services** | `SERVICES` | 6 service cards with icons |
| **About** | `COMPANY`, `ABOUT_FEATURES`, `MILESTONES` | Company info + timeline |
| **Stats** | `STATS` | Animated counter section |
| **Projects** | `PROJECTS`, `PROJECT_CATEGORIES` | Filterable project gallery |
| **Process** | `PROCESS_STEPS` | 5-step workflow |
| **Testimonials** | `TESTIMONIALS` | Auto-rotating carousel |
| **Contact** | `CONTACT`, `CONTACT_SERVICES` | Form + contact info |
| **Footer** | `CONTACT`, `FOOTER_*` | Full footer with links |
| **FloatButtons** | `CONTACT` | Fixed WhatsApp + Call buttons |

---

## ✅ Checklist Before Going Live

- [ ] Update all phone numbers in `constants.js`
- [ ] Update email address
- [ ] Update office address
- [ ] Add real project images to `/public/projects/`
- [ ] Update social media links
- [ ] Add company logo to `/public/logo.png`
- [ ] Add Open Graph image to `/public/og-image.jpg`
- [ ] Test contact form (add backend API if needed)
- [ ] Update SEO meta tags in `constants.js`
- [ ] Test on mobile devices
- [ ] Run `npm run build` to check for errors

---

## 🔗 Links

- Next.js Docs: https://nextjs.org/docs
- Deployment Guide: https://nextjs.org/docs/deployment
- SEO Guide: https://nextjs.org/learn/seo/introduction-to-seo

---

## 📞 Support

For questions or issues, contact: **info@nativebuilders.in**
