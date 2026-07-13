# Weeky website

This is the public repository for the official Weeky website. Weeky is a simple and
focused weekly planner for macOS.

- The application source code lives in a separate private repository.
- The static website is hosted with GitHub Pages.
- Installers are published manually with GitHub Releases.
- This repository must not contain the application source code or `.dmg` files.

## URLs

- Website: <https://plooliveira.github.io/week-app/>
- Releases: <https://github.com/plooliveira/week-app/releases>
- Latest macOS download:
  <https://github.com/plooliveira/week-app/releases/latest/download/Weeky.dmg>

The download URL always points to the asset named exactly `Weeky.dmg` in the latest
published release.

## Enable GitHub Pages

After pushing this repository to GitHub:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **Source → GitHub Actions**.
4. Push to `main`, or open the **Actions** tab and run the Pages workflow manually.
5. Wait for the deployment to finish, then open
   <https://plooliveira.github.io/week-app/>.

The workflow at `.github/workflows/pages.yml` publishes these static files directly.
There is no build step.

## Publish a new version manually

1. Generate the Weeky `.dmg` file.
2. Rename it exactly to `Weeky.dmg`.
3. Open the **Releases** tab in this repository.
4. Click **Draft a new release**.
5. Create a tag such as `v0.1.0`.
6. Use a title such as `Weeky v0.1.0`.
7. Write the release notes.
8. Attach `Weeky.dmg`.
9. Publish the release.
10. Test the **Download for macOS** button on the website.

The `/releases/latest/download/Weeky.dmg` link resolves to the asset from the latest
published release, as long as the file keeps the exact name `Weeky.dmg`.

Do not add the installer to this Git repository, create a `downloads` directory, or
use Git LFS for releases.

## Run locally

You can open `index.html` directly in a browser. To test it through a local server,
run this command from the repository root:

```sh
python3 -m http.server 8080
```

Then open <http://localhost:8080>.

## Replace the media placeholders

The first version intentionally uses a styled screenshot placeholder in the hero.
No external or temporary image is loaded.

To replace it:

1. Export the real application screenshot to
   `assets/screenshots/weeky-app.png`.
2. In `index.html`, replace the entire `<figure class="product-preview">` element
   with an image inside a figure, for example:

   ```html
   <figure class="product-preview product-preview-image">
     <img
       src="./assets/screenshots/weeky-app.png"
       alt="Weeky showing a weekly plan on macOS"
     />
   </figure>
   ```

3. Keep the image description accurate and concise.

Recommended locations for future brand and media files:

| Asset | Location |
| --- | --- |
| Logo | `assets/brand/weeky-logo.png` |
| App icon | `assets/brand/weeky-icon.png` |
| App screenshots | `assets/screenshots/` |
| Product mockups | `assets/mockups/` |
| Demo videos | `assets/videos/` |

If a demo video is added later, use an HTML `<video controls>` element, include a
poster image, captions when there is spoken content, and a written fallback. Keep
large video files out of the repository when practical.

## Project structure

```text
.
├── .github/
│   └── workflows/
│       └── pages.yml
├── assets/
│   ├── brand/
│   ├── mockups/
│   ├── screenshots/
│   └── videos/
├── index.html
├── privacy.html
├── README.md
└── styles.css
```
