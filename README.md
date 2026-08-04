# GOOD GROUND

A curated map of ground worth walking an animal on — 120 places across the Bay
Area and New York. 96 for dogs, 24 for harness-trained cats.

## Running it

It's a static site. No build step, no server code, no dependencies to install.
Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8901
```

## Deploying

**Live at <https://good-ground.netlify.app>**

Deploys are automatic. Push to `main` and the site updates:

```bash
git add -A && git commit -m "your message" && git push
```

Netlify watches this repo and republishes within about a minute. There is no
build step — it copies the files as they are. Watch a deploy or roll one back at
<https://app.netlify.com/projects/good-ground/deploys>.

Opening a pull request gets you a preview URL on a temporary domain, so you can
check a change before it reaches the live site.

No cache-busting needed: Netlify serves `cache-control: max-age=0, must-revalidate`
with ETags, so browsers pick up edits on the next request.

To deploy by hand without a push (rarely needed):

```bash
npx netlify-cli deploy --prod --dir=.
```

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
| `species` | `dog` or `cat` |
| `kind` | dogs: `run` · `grass` · `trail` · `beach` — cats: `walled` · `pocket` · `quiet` |
| `leash` | dogs: `off` open ground · `area` designated zone · `hours` posted hours · `on` leashed |
| `contain` | cats: `enclosed` · `bounded` · `open` — how hard it is to bolt |
| `highlight` | the one concrete fact that changes your trip |
| `src` / `url` | governing authority, and its rule page |

Stars are **derived** at render time — from `leash` for dogs, `contain` for cats
— never stored per place, so they can't drift out of sync with the rule.

### Cats

NYC Parks §1-04 names cats explicitly: licensed dogs *and cats* on a six-foot
leash may be brought into a park. There is no such thing as a designated cat
space, so `contain` is an assessment of how hard a spooked cat would find it to
bolt — walls, gates, sightlines — not an official rating.

Cat cards also show the distance to the nearest verified off-leash dog ground,
computed from the dog dataset at render time. The dog list doubles as an inverse
index: the best places for a dog are the worst for a cat.

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
