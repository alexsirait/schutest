# BU Knowledge Hub

> Professional Next.js knowledge base for German occupational disability law (Berufsunfähigkeitsrecht)

A modern, production-ready web application built with Next.js Pages Router, featuring a clean component architecture, responsive design, and elegant animations.

---

## 🚀 Features

- ✅ **Next.js Pages Router** - Server-side rendering with optimal performance
- ✅ **Fully Responsive** - Mobile-first design that works on all devices
- ✅ **Dark Mode** - Pre-configured dark theme with professional color palette
- ✅ **Loading Screen** - Smooth font loading with animated spinner
- ✅ **Elegant Animations** - Staggered fade-in effects for polished UX
- ✅ **SEO Optimized** - Meta tags, semantic HTML, and proper heading structure
- ✅ **Accessible** - ARIA labels, keyboard navigation, focus management
- ✅ **Component-Based** - Reusable, maintainable component architecture

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16.1.2** | React framework with SSR |
| **React 19.2.3** | UI library |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **Material Symbols** | Icon system |
| **Public Sans** | Typography |

---

## 📁 Project Structure

```
schutze-test/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx          # Sticky navigation
│   │   │   └── Footer.jsx          # Site footer with newsletter
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx     # Search hero
│   │   │   ├── CategoriesSection.jsx  # Category filters
│   │   │   ├── FeaturesSection.jsx # Feature cards grid
│   │   │   ├── ContentSection.jsx  # SEO content
│   │   │   ├── CTASection.jsx      # Call-to-action banner
│   │   │   └── FAQSection.jsx      # FAQ accordion
│   │   └── ui/
│   │       ├── Button.jsx          # Reusable button
│   │       ├── CategoryChip.jsx    # Filter chips
│   │       ├── FeatureCard.jsx     # Topic cards
│   │       ├── SearchBar.jsx       # Search input
│   │       ├── FAQAccordion.jsx    # Accordion component
│   │       └── LoadingScreen.jsx   # Initial loader
│   ├── pages/
│   │   ├── _app.jsx               # App wrapper with layout
│   │   ├── _document.jsx          # HTML document structure
│   │   └── index.jsx              # Home page
│   └── styles/
│       └── globals.css            # Global styles & animations
├── public/                         # Static assets
├── jsconfig.json                  # Path aliases (@/)
├── next.config.mjs                # Next.js configuration
├── postcss.config.mjs             # PostCSS configuration
├── package.json                   # Dependencies
└── README.md                      # This file
```

---

## 🎨 Design System

### Color Palette

```css
--color-primary: #f4c025          /* Yellow accent */
--color-bg-dark: #181611          /* Dark background */
--color-bg-card-dark: #27241b     /* Card background */
--color-text-primary-dark: #ffffff /* Primary text */
--color-text-secondary-dark: #bab29c /* Secondary text */
```

### Typography

- **Font Family**: Public Sans (300, 400, 500, 600, 700)
- **Icon System**: Material Symbols Outlined

### Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px
- **Max Width**: 1280px (screen-xl)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd schutze-test

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create production build |
| `npm start` | Start production server |

---

## 🎯 Component Guide

### UI Components

#### Button
Reusable button with variants and sizes:

```jsx
import Button from "@/components/ui/Button";

<Button variant="primary" size="lg" icon="calendar_today">
  Click Me
</Button>
```

**Variants**: `primary`, `secondary`, `dark`, `ghost`  
**Sizes**: `sm`, `md`, `lg`

#### SearchBar
Search input with integrated submit button:

```jsx
import SearchBar from "@/components/ui/SearchBar";

<SearchBar 
  placeholder="Search..." 
  onSearch={(query) => console.log(query)} 
/>
```

#### FeatureCard
Card component for displaying topics:

```jsx
import FeatureCard from "@/components/ui/FeatureCard";

<FeatureCard
  icon="description"
  title="Title"
  description="Description text"
  color="primary"
  onClick={() => {}}
/>
```

**Colors**: `primary`, `red`, `green`, `blue`

---

## ✨ Animations

The app uses elegant CSS animations for smooth UX:

### Available Animation Classes

```css
.animate-fade-in          /* Fade in with slight upward motion */
.animate-fade-in-up       /* Fade in from below (20px) */
.animate-fade-in-scale    /* Fade in with scale effect */

/* Delay utilities */
.animate-delay-100        /* 0.1s delay */
.animate-delay-200        /* 0.2s delay */
.animate-delay-300        /* 0.3s delay */
.animate-delay-400        /* 0.4s delay */
```

### Page Load Sequence

1. Loading screen displays
2. Fonts load (Material Symbols + Public Sans)
3. Content fades in
4. Sections animate sequentially with staggered delays

---

## 🔧 Configuration

### Path Aliases

Import paths use `@/` alias for cleaner imports:

```javascript
// Instead of: import Button from "../../components/ui/Button"
import Button from "@/components/ui/Button";
```

Configured in `jsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

---

## 🌐 SEO

The application includes:

- **Meta tags** for description and Open Graph
- **Semantic HTML** (header, main, article, section)
- **Structured headings** (h1, h2, h3)
- **Alt text** and ARIA labels
- **Fast loading** with optimized fonts

---

## ♿ Accessibility

- Keyboard navigation support
- Focus visible styles (primary color outline)
- ARIA labels on interactive elements
- Screen reader friendly (sr-only classes)
- Sufficient color contrast ratios

---

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly button sizes (min 44x44px)
- Optimized font sizes for readability
- Horizontal scroll prevention
- Stacked layouts on small screens

---

## 🎨 Customization

### Changing Colors

Edit `src/styles/globals.css`:

```css
:root {
  --color-primary: #your-color;
  --color-bg-dark: #your-color;
  /* ... other variables */
}
```

### Adding New Components

1. Create component in appropriate directory (`ui/`, `layout/`, `sections/`)
2. Export from `index.js` barrel file
3. Import using path alias: `@/components/.../ComponentName`

---

## 📄 License

This project is proprietary and confidential.

---

## 👤 Author

**BU Knowledge Hub Team**

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Google Fonts for typography and icons
