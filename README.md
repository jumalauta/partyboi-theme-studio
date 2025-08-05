# Partyboi Theme Studio

**Partyboi Theme Studio** is a development tool designed to help you create and customize info screen themes for [Partyboi](https://www.github.com/jumalauta/partyboi).

## 🚀 Getting Started

### 1. Prerequisites

Make sure you have [Node.js](https://nodejs.org/en) installed on your system.

### 2. Install Dependencies

Navigate to the project directory in your terminal and run:

```bash
npm install
```

### 3. Start the Development Server

Launch the dev server with:

```bash
npm start
```

This will start the app at http://localhost:5173.

Any changes made to files in the /theme directory will trigger automatic updates in the browser.

A theme consists of at least two files:

    - `/theme/screen.css` — defines the visual styles
    - `/theme/theme.json` — specifies the theme name and the resolution of the beamer in use

You can also include custom assets, such as fonts and images, as long as they can be referenced from the CSS file.

