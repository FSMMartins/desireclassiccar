# Classic Car Restoration Gallery

A modern, minimalist website to showcase classic car restoration projects. Visual-first design inspired by Instagram's grid layout and Apple's clean aesthetic.

## Features

- **Instagram-style grid layout** for project thumbnails
- **Fullscreen modal carousel** for detailed project viewing
- **Tag-based filtering** (Paint, Interior, Engine, Full Restoration, etc.)
- **Responsive design** - looks great on desktop and mobile
- **Fast loading** with optimized images
- **Clean, minimal UI** with no clutter

## Project Structure

Each car restoration project should be organized in the `/public/projects/` folder:

```
/public/projects/
 └── porsche-911/
     ├── 01.jpg
     ├── 02.jpg
     ├── 03.jpg
     └── info.json
```

## Adding a New Car Project

1. **Create a new folder** in `/public/projects/` with a descriptive name (use hyphens, no spaces)
   - Example: `porsche-911-turbo`, `mustang-fastback-67`

2. **Add images** numbered sequentially:
   - `01.jpg` (will be used as thumbnail)
   - `02.jpg`
   - `03.jpg`
   - etc.

3. **Create info.json** with project details:
```json
{
  "name": "Porsche 911 Classic",
  "year": "1973",
  "tags": ["Full Restoration", "Engine"],
  "description": "Complete rebuild with original performance and modern finishes."
}
```

## Image Guidelines

- **Format**: JPG or PNG
- **Recommended size**: 1200x1200px for thumbnails, up to 2000px for detail images
- **Naming**: Use sequential numbers (01.jpg, 02.jpg, etc.)
- **Quality**: High quality but web-optimized (under 500KB per image)

## Folder Naming Rules

- Use lowercase letters
- Use hyphens instead of spaces
- Be descriptive but concise
- Examples: `porsche-911`, `mustang-fastback`, `corvette-stingray`

## Available Tags

- Full Restoration
- Paint
- Interior
- Engine
- Bodywork
- Electrical
- Suspension

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (icons)

## Design Philosophy

- **Visual-first**: Images are the hero, text is minimal
- **Clean & minimal**: Inspired by Apple and Tesla design
- **Fast & responsive**: Optimized for all devices
- **Easy maintenance**: Just drop folders with images and JSON

No backend required - everything runs in the browser for maximum simplicity and performance.