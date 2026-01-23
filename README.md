# My Portfolio Website

A modern, responsive portfolio website to showcase my projects, skills, and achievements.

## What's Inside

- `index.html` - The main HTML file (structure of the website)
- `style.css` - CSS file (styling and design)
- `script.js` - JavaScript file (interactivity and animations)
- `README.md` - This file (documentation)

## How to View Your Website

### Method 1: Double-click the HTML file
1. Go to the folder: `c:\Users\Amirkhan\Documents\VS Code\portfolio-website`
2. Double-click on `index.html`
3. It will open in your default browser

### Method 2: Use VS Code Live Server (Recommended)
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Click "Open with Live Server"
4. Website will open and auto-refresh when you make changes

## How to Customize

### Change Your Information

Open `index.html` and find these sections to update:

1. **Your Name**: Search for "Amirkhan" and replace with your name
2. **About Section**: Update the text about yourself
3. **Email**: Replace "your.email@example.com" with your real email
4. **Location**: Change "Your Location" to your city/country
5. **Social Links**: Update GitHub, LinkedIn URLs

### Change Colors

Open `style.css` and find the `:root` section at the top:

```css
:root {
    --primary-color: #6366f1;  /* Change this */
    --secondary-color: #8b5cf6; /* And this */
}
```

### Add Your Projects

In `index.html`, find the `<!-- Projects Section -->` and duplicate a project card:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-laptop-code"></i>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Description of your project</p>
        <div class="project-tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
        </div>
        <div class="project-links">
            <a href="YOUR_GITHUB_LINK" class="project-link">
                <i class="fab fa-github"></i> Code
            </a>
            <a href="YOUR_LIVE_LINK" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live
            </a>
        </div>
    </div>
</div>
```

## Features

- Responsive design (works on phones, tablets, computers)
- Smooth scrolling navigation
- Animated sections on scroll
- Mobile-friendly hamburger menu
- Modern gradient design
- Contact form (needs backend to actually send emails)

## Next Steps

1. **Customize content** - Add your real information
2. **Add a photo** - Replace the placeholder with your picture
3. **Upload to GitHub** - Version control your code
4. **Deploy online** - Use GitHub Pages to make it live on the internet

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla - no frameworks)
- Font Awesome Icons

## Need Help?

- To change icons: Visit [Font Awesome](https://fontawesome.com/icons)
- To learn HTML/CSS: Try [MDN Web Docs](https://developer.mozilla.org/)
- To pick colors: Use [Coolors](https://coolors.co/)

---

Built with passion and code! 🚀
