# Specification

## Summary
**Goal:** Fix the broken production deployment so the app reliably loads at the icp0.io root URL, remove external Google Fonts dependencies, republish, and provide an in-app way to copy/share the correct link.

**Planned changes:**
- Investigate and fix the production build/deploy so the app loads in browsers without runtime `/src/*` dependencies and without missing JS/CSS entry assets.
- Ensure all app static assets (including `/assets/generated/*`) are correctly served and load in production with no 404s.
- Remove external Google Fonts usage by bundling fonts locally or switching to a fully local/system font stack (no `fonts.googleapis.com` / `fonts.gstatic.com` in production HTML).
- Republish the application to production and verify a new working icp0.io share URL.
- Add an in-app Share section/button that shows the current `window.location` URL and provides a one-tap “Copy link” action with a clear success state (English), without third-party services.

**User-visible outcome:** The app loads correctly from a new working icp0.io link across common browsers/devices, renders properly without external font CDNs, and includes a Share UI to copy the current app URL for reliable sharing.
