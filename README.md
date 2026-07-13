# Weeky website

This is the public repository for the official Weeky website. Weeky is a simple and
focused weekly planner for desktop.

- The application source code lives in a separate private repository.
- The static website is hosted with GitHub Pages.
- Installers are published manually with GitHub Releases.
- This repository must not contain the application source code or `.dmg` files.

## URLs

- Website: <https://plooliveira.github.io/week-app/>
- Releases: <https://github.com/plooliveira/weeky-app/releases>
- Latest release: <https://github.com/plooliveira/weeky-app/releases/latest>
- Latest macOS download:
  <https://github.com/plooliveira/weeky-app/releases/latest/download/Weeky.dmg>
- Latest Windows download:
  <https://github.com/plooliveira/weeky-app/releases/latest/download/Weeky-Windows-x64-Setup.exe>
- Latest Linux downloads:
  <https://github.com/plooliveira/weeky-app/releases/latest/download/Weeky-Linux-x64.deb>
  and <https://github.com/plooliveira/weeky-app/releases/latest/download/Weeky-Linux-x64.tar.gz>

The download URLs always point to assets from the latest published release. Keep
the installer filenames exactly as listed above so the operating-system detection
continues to resolve them correctly.

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

1. Generate the Weeky installer files.
2. Rename them exactly to `Weeky.dmg`, `Weeky-Windows-x64-Setup.exe`,
   `Weeky-Linux-x64.deb`, and `Weeky-Linux-x64.tar.gz`.
3. Open the **Releases** tab in this repository.
4. Click **Draft a new release**.
5. Create a tag such as `v0.1.0`.
6. Use a title such as `Weeky v0.1.0`.
7. Write the release notes.
8. Attach the installer files for the supported platforms.
9. Publish the release.
10. Test the download button for macOS, Windows, Linux, and an unknown or mobile
    platform.

The `/releases/latest/download/<filename>` links resolve to assets from the latest
published release, as long as each file keeps its documented name.

Do not add installers to this Git repository, create a `downloads` directory, or use
Git LFS for releases.

## Run locally

You can open `index.html` directly in a browser. To test it through a local server,
run this command from the repository root:

```sh
python3 -m http.server 8080
```

Then open <http://localhost:8080>.

## Media

The hero uses the real application screenshot at
`assets/screenshots/screenshot1.png`.

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
