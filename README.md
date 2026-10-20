# Sara Nagaty Portfolio

A static portfolio website built with HTML, CSS, and JavaScript. It does not require a backend or a build step.

## Project structure

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    ├── Sara-Nagaty-CV.pdf
    ├── images/
    │   ├── hero-laptop.jpg
    │   └── about.jpg
    └── projects/
        ├── new-shop.jpg
        ├── dashboard.jpg
        ├── travel.jpg
        ├── login.jpg
        ├── task-manager.jpg
        └── portfolio.jpg
```

## Contact and social links

Update the `SOCIAL_LINKS` object near the top of `js/main.js` to edit the Facebook, LinkedIn, GitHub, email, or WhatsApp links. The same links are used in the hero and footer, and the Contact Me button opens WhatsApp.

## Projects

Edit the `PROJECTS` array in `js/main.js`. Each entry contains a title, category, description, preview image, GitHub repository URL, and live demo URL.

Project screenshots belong in `assets/projects/` and should use the filenames listed above. If a project screenshot is missing, the page displays a text placeholder instead.

## Résumé

The Download CV button expects the file at `assets/Sara-Nagaty-CV.pdf`. Keep this filename and location, or update the link in `index.html`.

## Run locally

Open `index.html` in a browser, or use the VS Code Live Server extension for local development.

## Deploy on Vercel

1. Push the project to the [GitHub repository](https://github.com/sekkacompany797-droid/Sara-Nagaty-Portfolio).
2. In Vercel, import that repository and keep the project root as the Root Directory.
3. Select **Other** as the Framework Preset.
4. Leave the Build Command empty and set the Output Directory to `.`.
5. Deploy. No dependency installation or build command is needed.
