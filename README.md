# TECHNOVATION'26 — The Five Realms

Static website (plain HTML/CSS/JS, no build step).

## Edit content
Everything lives in `js/data.js`:
- `trials[]` — per event: `fee`, `prize`, `venue`, `time`, `team`, `form` (Google Form URL), `flow` (roadmap). Empty `""` shows "Coming soon".
- `forms.volunteer` — volunteer Google Form.
- `festRoadmap[]` — dates for registrations open/close, results.
- `sponsors[]`, `socials[]` — fill when final.
- `fest.startsAt` — countdown target.

## Drop in your AI art (optional, auto-detected)
- Realm/page backgrounds: `assets/scenes/<name>.webp` — names: `home`, `earth`, `fire`, `water`, `air`, `ether`.
  (Trials page uses `home`, Chronicle `ether`, Guild `fire`, Patrons `earth`, Contact `water`.)
  Size 2560×1440, keep under ~400 KB. When present, it replaces the code-painted landscape; particles stay on top.
- Trial card art: `assets/trials/<trial-id>.webp` (4:3, e.g. 800×600). IDs are in `data.js`.
- Soundtrack: `assets/audio/theme.mp3` replaces the generated score.

## Run locally
`python -m http.server 8000` (`python3` on Mac/Linux) then open http://localhost:8000. To test on a phone on the same Wi-Fi, open `http://<your-PC-IP>:8000` instead.

## Deploy free on Cloudflare Pages
1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Framework preset: None. Build command: empty. Output directory: `/`.
4. Deploy → you get `https://<project>.pages.dev`. Every git push redeploys.
