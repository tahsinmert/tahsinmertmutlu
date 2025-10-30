# UltraCV - Modern Single-Page CV

Production-ready, animated CV/portfolio built as a single React component with Framer Motion, GSAP, and Tailwind CSS.

## Features

✨ **Modern Design**
- Glassmorphism effects
- 3D transforms and rotations
- High-contrast theme (electric cyan + deep background)
- Light/dark mode toggle

🎬 **Animations**
- Per-letter hero name reveal
- Scroll-linked timeline progress
- 3D tilted project cards
- Interactive skill cloud
- Typewriter terminal effect
- Micro-interactions throughout

🛠️ **Developer Tools** (toggleable)
- Live CSS variable panel
- FPS performance meter
- DOM outline viewer
- Network status indicator

♿ **Accessibility**
- Keyboard navigation
- ARIA labels
- Reduced motion support
- Focus management
- Skip navigation link

## Installation

```bash
npm install framer-motion gsap tailwindcss
```

## Setup

1. **Create a new Vite + React app:**
   ```bash
   npm create vite@latest mycvinline-react
   cd mycvinline-react
   npm install
   ```

2. **Install dependencies:**
   ```bash
   npm install framer-motion gsap
   ```

3. **Setup Tailwind CSS:**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Configure Tailwind** (`tailwind.config.js`):
   ```js
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {
         colors: {
           primary: 'var(--color-primary)',
           bg: 'var(--color-bg)',
           surface: 'var(--color-surface)',
         }
       }
     },
     plugins: [],
   }
   ```

5. **Add Tailwind directives** (`src/index.css`):
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. **Replace `App.jsx` with UltraCV:**
   ```jsx
   import UltraCV from './UltraCV';
   
   function App() {
     return <UltraCV />;
   }
   
   export default App;
   ```

## Optional: Lottie Animations

Replace placeholder paths in `UltraCV.jsx` with your Lottie JSON files:

```jsx
// Install lottie-react if using Lottie
npm install lottie-react

// Update paths in UltraCV.jsx:
// '/animations/hero-wave.json'
// '/animations/rocket.json'
```

## Customization

Edit props in `App.jsx`:

```jsx
<UltraCV
  name="Your Name"
  role="Your Role"
  bio="Your bio"
  email="your@email.com"
  phone="+1 234 567 8900"
/>
```

## Theme Tokens

Modify CSS variables in the component:

```css
:root {
  --color-primary: #00f0ff;      /* Electric cyan */
  --color-secondary: #ff00ff;    /* Vivid magenta */
  --color-bg: #0a0a0a;           /* Near-black */
  --color-surface: rgba(255, 255, 255, 0.05);
  --color-text: #ffffff;
  --color-text-muted: rgba(255, 255, 255, 0.6);
}
```

## Production Build

```bash
# Build
npm run build

# Preview
npm run preview
```

## SEO Optimization

The website includes comprehensive SEO features for maximum visibility on Google:

✅ **Meta Tags**: Complete Open Graph, Twitter Cards, and SEO meta tags  
✅ **Structured Data**: Schema.org JSON-LD markup for Person and ProfilePage  
✅ **Keywords**: Strategic keyword targeting for "Tahsin Mert Mutlu"  
✅ **Sitemap**: XML sitemap for search engine indexing  
✅ **Robots.txt**: Search engine crawler instructions  
✅ **Canonical URLs**: Prevents duplicate content issues  

**Target Keywords:**
- Tahsin Mert Mutlu
- UI/UX Designer Istanbul
- Web Developer Turkey
- React Developer
- Vue.js Developer

## Netlify Deployment

### Step 1: Prepare for Deployment

```bash
# Build the project
npm run build

# Test the build locally
npm run preview
```

### Step 2: Deploy to Netlify

**Option A: Netlify CLI (Recommended)**

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Deploy
netlify deploy --prod
```

**Option B: Netlify Dashboard**

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub/GitLab repository
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click "Deploy site"
6. Your site will be live at `your-site-name.netlify.app`

### Step 3: Configure Custom Domain

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter: `tahsinmertmutlu.netlify.app` (or your custom domain)
4. Follow DNS configuration instructions

### Step 4: Enable Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://tahsinmertmutlu.netlify.app`
3. Verify ownership (HTML file or DNS)
4. Submit sitemap: `https://tahsinmertmutlu.netlify.app/sitemap.xml`

### Step 5: Monitor Performance

```bash
# Install Lighthouse CI for performance monitoring
npm install -g @lhci/cli

# Run Lighthouse audit
lhci autorun --upload.target=temporary-public-storage
```

**Expected Lighthouse Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

### Step 6: Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add site: `https://tahsinmertmutlu.netlify.app`
3. Submit sitemap

## Search Engine Optimization Tips

**To rank #1 for "Tahsin Mert Mutlu":**

1. ✅ **Content Quality**: Your name appears naturally throughout the site
2. ✅ **Technical SEO**: All meta tags, structured data, and sitemaps configured
3. ✅ **Page Speed**: Optimized with lazy loading and code splitting
4. ✅ **Mobile-First**: Fully responsive design
5. ✅ **User Experience**: Fast, accessible, and interactive
6. ✅ **Backlinks**: Share on LinkedIn, Twitter, GitHub
7. ✅ **Social Presence**: Consistent branding across platforms

**Additional Steps:**
- Share your portfolio on LinkedIn with hashtags
- Add portfolio link to your GitHub profile
- Include in your email signature
- Share on Twitter/X with tech community
- Submit to web design showcase sites

### Optimization Steps

1. **Purge unused CSS:**
   Tailwind automatically purges in production.

2. **Compress assets:**
   - Use `loading="lazy"` for images (already included)
   - Compress Lottie JSONs via [lottiefiles.com/compressor](https://lottiefiles.com/tools/compressor)

3. **Bundle analysis:**
   ```bash
   npm install -D vite-bundle-visualizer
   # Add to vite.config.js
   ```

## Testing

Run the included test suggestions:

```bash
npm install -D @testing-library/react @testing-library/jest-dom jest

# Create UltraCV.test.js (see inline suggestions in component)
npm test
```

### Test Coverage
- Theme toggle functionality
- Keyboard navigation
- Modal open/close
- Timeline scroll animations
- Reduced motion handling

## Performance

Target metrics:
- Initial JS: < 200KB gzipped
- Lazy-load heavy animations
- Lighthouse score: 90+ (Performance, Accessibility, Best Practices)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Mobile-responsive design
- Touch-friendly interactions (auto-detected)

## License

MIT

## Credits

Built with:
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [GSAP](https://greensock.com/gsap/) - Scroll animations
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React](https://react.dev/) - UI framework
