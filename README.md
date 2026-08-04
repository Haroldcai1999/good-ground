# GOOD GROUND

A curated map of parks, grass and off-leash ground for dogs — 96 places across
the Bay Area and New York.

## Running it

It's a static site. No build step, no server code, no dependencies to install.
Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8901
```

## Deploying

Copy the folder to any static host. Nothing in it is tied to a domain or a path.

- **Netlify** — drag the folder onto <https://app.netlify.com/drop>
- **GitHub Pages** — push this repo, then Settings → Pages → Source: `main` / root
- **Cloudflare Pages / Vercel** — connect the repo, no build command, output dir `.`

## Layout

```
index.html     markup, styles and app logic
places.js      the dataset — edit this to add or correct a place
vendor/        Leaflet and Space Mono, self-hosted
```

Only external request at runtime is the CARTO basemap tiles.

## The data

Coordinates come from OpenStreetMap — dog parks via an Overpass `leisure=dog_park`
query, larger parks via Nominatim. None were written from memory.

Leash rules were checked against the authority that governs each park. Every
entry carries a `src` key into `SOURCES`, and many carry a park-specific `url`,
so each card links to the rule page behind it.

| field | meaning |
| --- | --- |
| `cat` | `run` · `grass` · `trail` · `beach` |
| `leash` | `off` open ground · `area` designated zone · `hours` posted hours · `on` leashed |
| `highlight` | the one concrete fact that changes your trip |
| `src` / `url` | governing authority, and its rule page |

Stars are **derived** from `leash` at render time — never stored per place, so
they can't drift out of sync with the rule.

Rules change with the season, the hour and the posted sign. The footer says so,
and every card links out for checking.

### Editing

Add or correct entries in `places.js`. After editing, bump the `?v=` on the
`places.js` script tag in `index.html` — CDNs cache aggressively and visitors
will otherwise keep the old dataset.

## Credits

Map data © OpenStreetMap contributors (ODbL). Tiles © CARTO.
Space Mono under the SIL Open Font License. Leaflet under BSD-2-Clause.

Interaction and layout follow the pattern set by [CW&T's Places We Love](https://maps.cwandt.com).
