# Specification

## Summary
**Goal:** Build a single-page, mobile-friendly interactive Valentine proposal flow with a playful “No” button, followed by a sequential set of romantic reveal steps (image, shayari, songs, quotes, and date ideas), designed to run smoothly on Android Chrome.

**Planned changes:**
- Create a full-screen, multi-step single-page flow with smooth transitions and touch-friendly controls.
- Implement the opening proposal step with “Yes” and an evasive “No” button that moves away on hover/tap attempts.
- On “Yes”, show a couple image and the exact text “Good choice”, with navigation to proceed.
- Add a shayari step that displays the provided Hindi text exactly (preserving line breaks) in a visually beautiful layout.
- Add a music step listing 5 songs with custom play/pause UI; ensure only one track plays at a time; show an unavailable state if an audio asset is missing.
- Add a “Things My heart feels for you” step showing the provided quotes in a romantic layout.
- Add an “Our virtual Date ideas” step showing the provided 13 ideas in order; allow scrolling if needed.
- Apply a consistent pink/white romantic theme across all steps (typography, spacing, subtle decorative elements).
- Add in-flow navigation (Next/Back where appropriate) that prevents reaching later steps before “Yes” is accepted.
- Bundle and reference all required static assets (image(s), decorative background, audio files) locally so the experience works without external network dependencies once loaded.

**User-visible outcome:** The user can open a single-page Valentine surprise on Android Chrome, encounter a “Yes/No” proposal where “No” can’t be clicked, then (after pressing “Yes”) progress through themed, full-screen steps featuring a couple image, romantic shayari, playable local songs, quotes, and virtual date ideas.
