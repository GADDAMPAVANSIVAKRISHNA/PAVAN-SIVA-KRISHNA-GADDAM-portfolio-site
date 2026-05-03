# Pavan's Portfolio Website

A modern, fully-featured portfolio website built with React, Tailwind CSS, and beautiful animations.

## 🎯 Features

- **Smooth Animations**: Custom cursor, reveal effects, and scroll animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Multiple Sections**: Hero, About, Skills, Experience, Projects, Certifications, Contact, Footer
- **Interactive Elements**: Project filtering, skill progress bars, timeline view
- **Form Handling**: Contact form with localStorage persistence
- **Dark Theme**: Professional dark mode with accent colors

## 📦 Tech Stack

- **React 18**: UI library
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Sonner**: Toast notifications
- **Axios**: HTTP client

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd app/frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

The app will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build/` folder.

## 📁 Project Structure

```
app/frontend/src/
├── App.js                 # Main app component
├── App.css               # App-specific styles
├── index.js              # React entry point
├── index.css             # Global styles & Tailwind
├── mock.js               # All mock data
└── components/
    ├── Cursor.jsx        # Custom cursor
    ├── Reveal.jsx        # Scroll reveal component
    ├── Navbar.jsx        # Navigation bar
    ├── Hero.jsx          # Hero section with typing
    ├── About.jsx         # About section
    ├── Skills.jsx        # Skills section with progress bars
    ├── Experience.jsx    # Timeline experience
    ├── Projects.jsx      # Projects with filtering
    ├── Certifications.jsx # Education & certifications
    ├── Contact.jsx       # Contact form
    ├── Footer.jsx        # Footer with marquee
    └── ui/
        └── sonner.jsx    # Sonner toaster re-export
```

## 🎨 Customization

### Update Your Information

Edit `src/mock.js` to update:
- Profile information
- Skills and proficiency levels
- Experience entries
- Projects
- Certifications
- Education details

### Styling

- Global styles: `src/index.css`
- Component styles: `src/App.css`
- Tailwind config: `tailwind.config.js`

### Theme Colors

CSS custom properties are defined in `src/index.css`:
- `--bg-0`, `--bg-1`, `--bg-2`: Background colors
- `--accent`, `--accent-2`: Accent colors
- `--text-0`, `--text-1`, `--text-2`: Text colors

## 📝 Notes

- The contact form saves messages to browser localStorage
- Custom cursor is disabled on touch devices
- All images and links are configurable through mock data
- Animations are CSS-based for optimal performance

## 📄 License

Built for Pavan Siva Krishna Gaddam

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Made with ❤️ using React + Tailwind CSS**
