# Explore Kathmandu

A front-end travel guide website for exploring the Kathmandu Valley — browse destinations, filter and search, build a day-by-day itinerary with a budget calculator, save favorites, and read practical travel tips. Built with plain HTML, CSS, and vanilla JavaScript (no frameworks, no build step).

## Features

- **Destination browsing** — Explore page with search, category filters (Religious, Heritage, Shopping, Market, Nature, Café, Park), and sorting (A–Z, Z–A, ratings).
- **Destination details** — Dedicated detail view per destination with overview, key info, and a favorite toggle.
- **Itinerary planner** — Build a multi-day plan, add/remove places per day, and a budget calculator, all persisted with `localStorage`.
- **Favorites** — Save destinations to a profile favorites list (`sessionStorage`).
- **Accounts (demo only)** — Simple sign-up/login flow that stores session state in `sessionStorage`. There is no backend — no real authentication, password hashing, or data persistence across browsers/devices.
- **Dark/light theme toggle** — Preference saved in `localStorage` and applied site-wide.
- **Travel guide** — Static page with tips on best time to visit, getting around, temple etiquette, food & water safety, money & shopping, useful Nepali phrases, and an FAQ.
- **About & feedback** — About page with a feedback form (front-end validation only; does not send anywhere).
- **Responsive design** — Layout adapts across breakpoints via `responsive.css`.

## Pages

| File | Description |
|---|---|
| `index.html` | Home page — hero, featured destinations, planning overview, testimonials |
| `explore.html` | Browse, search, filter, and sort all destinations |
| `details.html` | Destination detail view (populated dynamically via query params) |
| `itinerary.html` | Day-by-day itinerary builder with budget calculator |
| `guide.html` | Travel tips and FAQ |
| `about.html` | About the project + feedback form |
| `profile.html` | User profile, favorites, and saved itinerary summary |
| `login.html` | Log in (demo auth) |
| `signup.html` | Create account (demo auth) |

## Project Structure

```
.
├── index.html
├── explore.html
├── details.html
├── itinerary.html
├── guide.html
├── about.html
├── profile.html
├── login.html
├── signup.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── script.js          # theme toggle, login-gate helper
│   └── destinations.js    # destination data + card rendering, filtering, sorting
└── images/
    └── destinations/       # destination photos
```

> Note: HTML files reference assets under `css/` and `js/` (and images under `images/destinations/`). Make sure your local folder structure matches these relative paths — see [Setup](#setup) below.

## Tech Stack

- HTML5
- CSS3 (custom properties for theming, no framework)
- Vanilla JavaScript (no dependencies)
- Fonts: [Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville) & [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via Google Fonts

## Setup

No build tools or dependencies are required.

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>
   ```
2. Make sure the folder structure has `css/style.css`, `css/responsive.css`, `js/script.js`, `js/destinations.js`, and an `images/destinations/` folder with the destination photos referenced in `js/destinations.js`.
3. Open `index.html` directly in a browser, or serve the folder locally, e.g.:
   ```bash
   npx serve .
   # or
   python3 -m http.server 8000
   ```
4. Visit `http://localhost:8000` (or the port shown) in your browser.

## Data

All destination data lives in `js/destinations.js` as a plain array of objects (`id`, `name`, `category`, `tags`, `location`, `rating`, `description`, `image`, `featured`, `map_location`). To add or edit a destination, update this file directly — there is no database or API.

## Known Limitations

- **No backend**: sign-up/login, favorites, and itineraries are stored only in the browser (`sessionStorage`/`localStorage`) and are not shared across devices or persisted after clearing browser data.
- **No real authentication**: passwords are not verified against any stored credentials.
- **Feedback form** on the About page does not actually send messages anywhere.

## Contributing

Issues and pull requests are welcome. For larger changes, please open an issue first to discuss what you'd like to change.

## Disclaimer

Explore Kathmandu is an independent travel guide and is not affiliated with any government tourism board. Prices and hours listed are estimates and may change.
