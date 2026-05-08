# CustomDeskLab

A curated repo for custom desktop setups featuring:
- high-resolution wallpapers
- JSX desktop widgets for [Übersicht](https://tracesof.net/uebersicht/)
- full setup packs (wallpaper + widget bundle)

## Repository Structure

```text
CustomDeskLab/
├── packs/
│   ├── full-setups/   # Complete bundles: wallpaper(s) + widget(s) + optional preview
│   ├── wallpapers/    # Wallpaper-only packs (prefer high-resolution originals)
│   └── widgets/       # Widget-only packs (.jsx / widget folders for Übersicht)
└── README.md
```

### What goes where?

- **`packs/full-setups/`**
  - Use for complete downloadable setups.
  - Recommended per-setup folder format:
    - `wallpaper.*`
    - `widget/` (or `widget.jsx`)
    - `preview.*` (optional)
    - `notes.txt` (optional install details)

- **`packs/wallpapers/`**
  - Wallpaper-only uploads.
  - Prefer high-resolution formats (`.png`, `.jpg`, `.webp`) and descriptive filenames.

- **`packs/widgets/`**
  - Übersicht widget-only uploads.
  - Keep each widget in its own folder for easy download and drag-and-drop install.

## Quick Guide: Using Übersicht Widgets

1. Install Übersicht from: https://tracesof.net/uebersicht/
2. Launch Übersicht (it runs in the macOS menu bar).
3. Open the widgets folder from Übersicht preferences.
4. Download a widget from `packs/widgets/` (or from a `packs/full-setups/<name>/widget` folder).
5. Copy the widget folder or `.jsx` file into your Übersicht widgets directory.
6. Übersicht auto-loads the widget (or refresh from the menu if needed).

## Contribution

- Keep each setup/widget in its own clearly named folder.
- Include a preview image when possible.
- Keep original high-res wallpapers in `packs/wallpapers/` for fast direct downloads.
- If a widget depends on fonts/colors/apps, include a short `notes.txt` in the same pack.
