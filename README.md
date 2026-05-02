# DevOps Portfolio

Modern personal portfolio for a DevOps Engineer, DevSecOps Enthusiast, and AI Explorer. This project is optimized for GitHub Pages deployment.

## Features

- React + Vite + TypeScript
- Tailwind CSS
- Dark corporate tech design
- Glassmorphism cards
- Blue, cyan, and purple gradient accent
- Responsive layout
- Content separated in one editable data file
- GitHub Pages ready
- GitHub Actions deployment workflow included

## Folder Structure

```bash
devops-portfolio/
├─ public/
│  └─ cv.pdf
├─ src/
│  ├─ data/
│  │  └─ portfolio.ts
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
├─ .github/
│  └─ workflows/
│     └─ deploy.yml
├─ index.html
├─ package.json
├─ vite.config.ts
├─ tailwind.config.js
├─ postcss.config.js
└─ README.md
```

## Run Locally

```bash
npm install
npm run dev
```

Open:

```bash
http://localhost:5173
```

## Build Production

```bash
npm run build
npm run preview
```

## Edit Portfolio Content

Edit this file:

```bash
src/data/portfolio.ts
```

You can update:

- Name
- Role
- Headline
- Tagline
- About
- Skills
- Projects
- Journey
- Certifications
- Blog notes
- Contact links

## Add Your CV

Replace this placeholder file:

```bash
public/cv.pdf
```

with your real CV file using the same name:

```bash
cv.pdf
```

## Deploy to GitHub Pages: Repository Project Page

Use this if your repository URL is like:

```bash
https://github.com/USERNAME/devops-portfolio
```

Your live website will be:

```bash
https://USERNAME.github.io/devops-portfolio/
```

### 1. Update `package.json`

```json
"homepage": "https://USERNAME.github.io/devops-portfolio"
```

### 2. Update `vite.config.ts`

```ts
base: "/devops-portfolio/"
```

### 3. Deploy with GitHub Actions

Push to the `main` branch.

Then open your repository settings:

```bash
Settings → Pages → Source → GitHub Actions
```

The included workflow will build and deploy the site automatically.

## Deploy to GitHub Pages: User Page

Use this if your repository name is:

```bash
USERNAME.github.io
```

Your live website will be:

```bash
https://USERNAME.github.io/
```

Update `vite.config.ts`:

```ts
base: "/"
```

Update `package.json`:

```json
"homepage": "https://USERNAME.github.io"
```

## Optional Manual Deploy with gh-pages

```bash
npm install -D gh-pages
npm run deploy
```

## Recommended Improvements

- Replace dummy content with real professional details
- Add real project links and GitHub repositories
- Add architecture diagrams for technical case studies
- Add professional photo or avatar
- Add markdown-based blog pages
- Add SEO metadata and Open Graph image
- Add custom domain
- Add analytics such as Plausible or Google Analytics
