# Portfolio Design Options

This document contains different design variations you can apply to your portfolio. Simply uncomment the option you want to use in the respective files.

## 🎨 Background Options

### Current: Animated Gradient Background
**Location**: `app/globals.css` (currently active)
- Smooth animated gradient
- Light mode: Pastel peach, pink, lavender, blue
- Dark mode: Deep blues, purples, burgundy

### Option 1: Particle Network Background
**How to enable**:
1. Open `app/page.tsx`
2. Import: `import ParticleBackground from '@/components/ParticleBackground';`
3. Add `<ParticleBackground />` after `<CustomCursor />`

**Features**:
- Floating particles with connecting lines
- Interactive network effect
- Subtle orange glow

### Option 2: Glassmorphism Cards
**How to enable**:
1. Open `app/globals.css`
2. Add this to the `@layer base` section:

```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}
```

3. Apply `.glass-card` class to sections in components

### Option 3: Mesh Gradient Background
**Replace body background in `globals.css` with**:

```css
body {
  background: 
    radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%);
}
```

---

## 🎭 Animation Options

### Option 4: Floating Elements
**Add to components** (e.g., Skills, Projects):

```tsx
className="animate-float"
```

**Add to `globals.css`**:

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
```

### Option 5: Parallax Scroll Effect
**Install dependency**:
```bash
npm install framer-motion
```

**Wrap sections with**:
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
```

---

## 🌈 Color Scheme Options

### Option 6: Neon Cyberpunk Theme
**Replace colors in `globals.css` :root**:

```css
--primary: oklch(0.70 0.30 330); /* Neon Pink */
--secondary: oklch(0.60 0.25 200); /* Cyan */
--background: oklch(0.08 0.02 260); /* Very Dark Blue */
```

### Option 7: Nature/Earth Tones
```css
--primary: oklch(0.55 0.20 140); /* Forest Green */
--secondary: oklch(0.65 0.15 80); /* Warm Brown */
--accent: oklch(0.75 0.18 60); /* Golden Yellow */
```

### Option 8: Monochrome Minimalist
```css
--primary: oklch(0.20 0 0); /* Black */
--secondary: oklch(0.50 0 0); /* Gray */
--accent: oklch(0.85 0 0); /* Light Gray */
```

---

## ✨ Special Effects

### Option 9: Text Shimmer Effect
**Add to `globals.css`**:

```css
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}

.text-shimmer {
  background: linear-gradient(90deg, 
    currentColor 0%, 
    rgba(255,255,255,0.8) 50%, 
    currentColor 100%);
  background-size: 1000px 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: shimmer 3s infinite;
}
```

### Option 10: Hover Glow Cards
**Add to project/skill cards**:

```css
.glow-card {
  transition: all 0.3s ease;
}

.glow-card:hover {
  box-shadow: 0 0 30px rgba(255, 140, 60, 0.5);
  transform: translateY(-5px);
}
```

---

## 🎯 Layout Options

### Option 11: Bento Grid Layout (Projects)
**Replace Projects grid with**:

```tsx
<div className="grid grid-cols-4 grid-rows-3 gap-4">
  <div className="col-span-2 row-span-2">Project 1</div>
  <div className="col-span-2 row-span-1">Project 2</div>
  <div className="col-span-1 row-span-1">Project 3</div>
  {/* ... */}
</div>
```

### Option 12: Horizontal Scroll Sections
**Wrap sections in**:

```tsx
<div className="flex overflow-x-auto snap-x snap-mandatory">
  <section className="min-w-full snap-center">...</section>
</div>
```

---

## 🔧 Quick Customization Tips

1. **Change gradient speed**: Modify `15s` in `animation: gradientShift 15s`
2. **Adjust cursor size**: Change `width/height` in `#cursor` styles
3. **Modify particle count**: Change `particleCount = 50` in ParticleBackground
4. **Theme colors**: Edit CSS variables in `:root` and `.dark`

---

## 📝 Notes

- Test each option individually before combining
- Some effects may impact performance on lower-end devices
- Always check responsiveness after applying changes
- Keep accessibility in mind (contrast ratios, animations)
