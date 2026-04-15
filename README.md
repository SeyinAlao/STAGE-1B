# Stage 1B Task: Testable Profile Card

**Live Demo:** [Insert your Live URL here]

## Overview
This project is a responsive, accessible, and interactive Profile Card component built strictly with semantic HTML5, modern CSS (Grid/Flexbox), and Vanilla JavaScript. It was designed to meet strict automated testing requirements while maintaining a unique, "editorial" aesthetic.

## Features & Acceptance Criteria Met
* **Automated Testing Ready:** Every required interactive and structural element contains the exact `data-testid` attributes specified in the rubric.
* **Semantic HTML:** The layout is structured using meaningful tags including `<main>`, `<article>`, `<figure>`, `<header>`, `<section>`, and `<nav>`.
* **Live Epoch Time:** The component fetches and displays the current system epoch time in milliseconds, updating dynamically every 1000ms.
* **Responsive Layout:** Utilizes a CSS Grid layout that presents a side-by-side profile on desktop and gracefully collapses into a stacked, single-column layout on mobile and tablet devices.
* **Custom UI:** Features a custom color palette, integrated Google Fonts (Space Mono and Open Sans), and a custom interactive cursor for devices with fine pointer support.

## Accessibility (a11y) Notes
Accessibility was a primary focus for this component:
* **Screen Reader Support:** The dynamically updating epoch time is wrapped in an `aria-live="polite"` container so assistive technologies are aware of the changes without interrupting the user.
* **Keyboard Navigation:** All interactive elements (social links) are fully keyboard-focusable. Custom `:focus-visible` dashed outlines ensure users navigating via keyboard always know their active position.
* **Image Alt Text:** Meaningful and descriptive `alt` text is provided for the avatar image.
* **WCAG AA Compliance:** The custom color palette was applied with contrast ratios in mind to ensure text remains highly readable against the background.
* **Link Safety:** All external social links use `target="_blank"` and `rel="noopener noreferrer"`.

## How to Run Locally

Since this project uses pure HTML, CSS, and vanilla JavaScript, there is no build step or package manager required.

1. **Clone the repository:**
   ```bash
   git clone [Insert your Repo URL here]
