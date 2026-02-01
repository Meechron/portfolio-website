# Portfolio Website

A clean and modern portfolio website built with vanilla HTML, CSS, and JavaScript. Features a responsive design, smooth animations, and an intuitive user interface.

## Features

- **Responsive Design** - Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Smooth Animations** - Scroll-triggered animations and smooth transitions throughout
- **Interactive Navigation** - Mobile hamburger menu with smooth scroll navigation
- **Modern UI** - Clean design with gradient accents and contemporary styling
- **Project Showcase** - Dedicated section to highlight projects with tags and links
- **Contact Form** - Built-in contact form ready for backend integration

## Tech Stack

- HTML5
- CSS3 (with CSS custom properties)
- Vanilla JavaScript
- Font Awesome icons

## Getting Started

### Prerequisites

You'll need a modern web browser and optionally a local development server.

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Open the project
   - Simply open `index.html` in your browser, or
   - Use a local server like Live Server (VS Code extension) for better development experience

### Development

For development, I recommend using VS Code with the Live Server extension:

```bash
# Install Live Server in VS Code
# Then right-click index.html and select "Open with Live Server"
```

The site will auto-reload when you make changes to any file.

## Project Structure

```
portfolio-website/
├── index.html          # Main HTML structure
├── style.css           # Styles and animations
├── script.js           # Interactive functionality
└── README.md           # Project documentation
```

## Customization

### Colors

The color scheme uses CSS custom properties defined in [style.css](style.css). Update these values in the `:root` selector:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --text-color: #1f2937;
  --bg-color: #ffffff;
}
```

### Adding Projects

To add a new project, duplicate a project card in the projects section:

```html
<div class="project-card">
  <div class="project-image">
    <i class="fas fa-laptop-code"></i>
  </div>
  <div class="project-content">
    <h3>Project Title</h3>
    <p>Brief description of what the project does and the problem it solves.</p>
    <div class="project-tags">
      <span class="tag">React</span>
      <span class="tag">Node.js</span>
      <span class="tag">MongoDB</span>
    </div>
    <div class="project-links">
      <a href="#" class="project-link">
        <i class="fab fa-github"></i> Code
      </a>
      <a href="#" class="project-link">
        <i class="fas fa-external-link-alt"></i> Live Demo
      </a>
    </div>
  </div>
</div>
```

## Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select the main branch as source
4. Your site will be live at `https://yourusername.github.io/portfolio-website`

### Other Options

- **Netlify** - Drag and drop deployment
- **Vercel** - Connect your GitHub repo for automatic deployments
- **Cloudflare Pages** - Fast global CDN deployment

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and customize it for your own use. If you find bugs or have suggestions, please open an issue.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Icons from [Font Awesome](https://fontawesome.com)
- Inspiration from various portfolio designs across the web
