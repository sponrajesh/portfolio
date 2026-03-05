# React Portfolio

A single-page portfolio with a **circular floating menu** on the right: profile image in the center and orbit items (Home, React Projects, Blender Projects, YouTube). Built with React, Vite, Tailwind CSS, and React Router. Supports **light and dark mode** with smooth transitions.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Project structure

```
src/
├── components/
│   └── layout/
│       ├── Layout.jsx           # Shell: theme toggle, main content, floating menu
│       └── FloatingMenu/
│           ├── FloatingMenu.jsx  # Circular menu (profile + orbit items)
│           └── index.js
├── context/
│   └── ThemeContext.jsx         # Light/dark theme state
├── sections/
│   ├── Home/
│   ├── ReactProjects/
│   ├── BlenderProjects/
│   └── YouTube/
├── App.jsx
├── main.jsx
└── index.css
```

- **Floating menu**: Fixed on the right; center = profile image, orbit = nav items with icons and hover tooltips.
- **Sections**: One folder per section; each exports a default component used as a route.
- **Theme**: Stored in `localStorage`; respects `prefers-color-scheme` on first visit.

## Customization

1. **Profile image**  
   Add your photo as `public/profile.jpg`. The menu uses it in the center circle. If the file is missing, a placeholder is shown.

2. **Copy**  
   Edit the content in:
   - `src/sections/Home/Home.jsx`
   - `src/sections/ReactProjects/ReactProjects.jsx`
   - `src/sections/BlenderProjects/BlenderProjects.jsx`
   - `src/sections/YouTube/YouTube.jsx`

3. **Menu items**  
   Update `MENU_ITEMS` in `src/components/layout/FloatingMenu/FloatingMenu.jsx` to add/change labels, paths, or icons (from `lucide-react`).

4. **Theme**  
   Toggle is top-left. Colors use Tailwind (e.g. `slate`, `indigo`); adjust classes in `index.css` and components as needed.

## Build

```bash
npm run build
npm run preview
```
