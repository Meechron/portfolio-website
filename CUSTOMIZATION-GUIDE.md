# Portfolio Customization Guide

## What I Did - Summary

I've created a complete, professional portfolio website populated with ALL your information from your resume!

### Your Website Includes:

✅ **Personal Information**
- Name: Amirkhan Mirzalimov
- Email: amirkhan22888@gmail.com
- Phone: (437) 258-6220
- Location: Ontario, Canada

✅ **About Section**
- Electrical Engineering student at Queen's University
- Your passion for automation and embedded systems
- Experience summary

✅ **Experience Timeline** (NEW!)
- ZDFlex - Automation Engineer Intern
- Airbus Helicopters - IT Specialist Intern
- Queen's University - Teacher Assistant
- Queen's Formula SAE - Electrical Engineer
- Queen's HPC - Systems Architect

✅ **Skills Section**
- All 8 skill categories from your resume
- Embedded Systems, Programming, Power Electronics, Design & CAD, Automation, etc.

✅ **Projects Section**
- Car Autopilot System
- Formula SAE Battery Pack
- LoRa Telemetry System
- AC-DC Voltage Converter
- Air Quality Control System
- CAN 2.0B Network Architecture

✅ **Contact Section**
- Working contact form
- Your email and phone
- LinkedIn placeholder

---

## What You Need To Update

### 1. LinkedIn URL
Your LinkedIn URL is currently a placeholder. Update it in TWO places:

**In [index.html](c:\Users\Amirkhan\Documents\VS Code\portfolio-website\index.html):**

Find and replace:
```html
https://linkedin.com/in/amirkhan-mirzalimov
```

With your actual LinkedIn URL (found on your resume).

### 2. GitHub Username
Replace `yourusername` with your actual GitHub username in these locations:

**In [index.html](c:\Users\Amirkhan\Documents\VS Code\portfolio-website\index.html):**
```html
https://github.com/yourusername
```

### 3. Add Project Links (Optional)
If your projects are on GitHub, add the links:

Find each project in the HTML and update:
```html
<a href="#" class="project-link">
```
to
```html
<a href="https://github.com/yourusername/project-name" class="project-link">
```

### 4. Add Your Photo (Optional)
Replace the placeholder icon with your photo:

1. Save your photo as `profile-photo.jpg` in the portfolio-website folder
2. In [index.html](c:\Users\Amirkhan\Documents\VS Code\portfolio-website\index.html), find:
```html
<div class="image-placeholder">
    <i class="fas fa-user"></i>
</div>
```

3. Replace with:
```html
<div class="image-placeholder">
    <img src="profile-photo.jpg" alt="Amirkhan Mirzalimov" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">
</div>
```

---

## How To View Your Website

### Option 1: Double-Click Method
1. Open File Explorer
2. Navigate to: `C:\Users\Amirkhan\Documents\VS Code\portfolio-website`
3. Double-click `index.html`
4. Opens in your default browser

### Option 2: Live Server (Recommended)
1. In VS Code, install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"
4. Auto-refreshes when you make changes!

---

## Next Steps - Getting Your Website Online

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Sign in (or create account)
3. Click "+" → "New repository"
4. Name: `portfolio-website` or `yourusername.github.io`
5. Keep it **Public**
6. Don't initialize with README
7. Click "Create repository"

### Step 2: Upload Your Code
I can help you with this! Just tell me when you're ready and I'll:
1. Initialize Git in your folder (`git init`)
2. Add all files (`git add .`)
3. Commit (`git commit`)
4. Push to GitHub (`git push`)

### Step 3: Deploy with GitHub Pages (FREE!)
1. In your GitHub repository, go to Settings
2. Scroll to "Pages" section
3. Under "Source", select "main" branch
4. Click Save
5. Your site will be live at: `https://yourusername.github.io/portfolio-website`

---

## Color Customization

Want to change the color scheme? Edit [style.css](c:\Users\Amirkhan\Documents\VS Code\portfolio-website\style.css):

```css
:root {
    --primary-color: #6366f1;  /* Change to your favorite color */
    --secondary-color: #8b5cf6; /* Complementary color */
}
```

**Color suggestions:**
- Blue/Purple (current): `#6366f1` and `#8b5cf6`
- Green: `#10b981` and `#059669`
- Red: `#ef4444` and `#dc2626`
- Orange: `#f59e0b` and `#d97706`

Use [coolors.co](https://coolors.co/) to find color codes!

---

## Features Your Website Has

✨ **Modern Design**
- Clean, professional layout
- Gradient backgrounds
- Smooth animations

✨ **Fully Responsive**
- Works on phones, tablets, and computers
- Mobile hamburger menu
- Responsive timeline

✨ **Interactive**
- Smooth scrolling between sections
- Hover effects on cards
- Scroll animations (elements fade in as you scroll)

✨ **Professional**
- Timeline for experience
- Project showcase with tags
- Skills grid with icons
- Contact form

---

## File Structure

```
portfolio-website/
├── index.html           ← The structure (your content)
├── style.css           ← The design (colors, fonts, layout)
├── script.js           ← The interactivity (animations, menu)
├── README.md           ← General documentation
└── CUSTOMIZATION-GUIDE.md ← This file (what you're reading)
```

---

## Need Help?

Just ask me! I can:
- Change colors
- Add more sections
- Modify text
- Help you upload to GitHub
- Deploy your website live
- Add more features

Your portfolio is ready to impress! 🚀
