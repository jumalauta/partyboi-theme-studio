# Partyboi Theme Studio

A development tool for creating and previewing info screen themes for [Partyboi](https://www.github.com/jumalauta/partyboi). Edit CSS and assets in the `theme/` directory and see changes live in an iframe-based preview.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en) installed on your system.

### Install and Run

```bash
npm install
npm start
```

This starts the dev server at http://localhost:5173. Any changes to files in the `theme/` directory will trigger automatic updates in the browser.

## Theme Structure

A theme consists of at least two files:

- `theme/screen.css` — defines the visual styles
- `theme/theme.json` — theme metadata (see below)

You can also include custom assets such as fonts and images, as long as they are referenced from the CSS file.

### theme.json

| Field | Description |
|-------|-------------|
| `name` | Theme display name |
| `width` | Resolution width of the beamer/projector at the party venue (e.g. `1920`) |
| `height` | Resolution height of the beamer/projector at the party venue (e.g. `1080`) |
| `injectBody` | Optional HTML string injected at the beginning of the `<body>` element |

### Slide Types

The info screen rotates through different slide types. Your CSS should style the following:

- **TextSlide** — heading + paragraph text
- **ListSlide** — heading + bulleted lists
- **ImageSlide** — full-screen background image
- **QrCodeSlide** — QR code + description in columns
- **ScheduleSlide** — event schedule table
- **CompoSlide** — competition entry/status display
- **CompoEntrySlide** — detailed competition entry with author info

Use the template selector in the sidebar to preview each type while developing.

## Updating Templates

To populate the preview with real slide data from a Partyboi instance:

```bash
npm run update-templates          # from sandbox.partyboi.app
npm run update-templates:local    # from localhost:8123
```

## Deploying

Build the theme package:

```bash
npm run build
```

This creates a `screen.zip` file in the project root. Log in to your Partyboi instance as an admin, open the Assets view, and upload it.