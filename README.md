# [WTA PWA](https://github.com/botblake/wta_pwa)

Simple Progressive Web App (PWA) demo for my university course Web Technologies and Applications (WTA).
The project demonstrates a minimal PWA setup with a manifest, service worker, and a few small client-side features.

## Features

- Click counter
- Page visit counter (stored in localStorage)
- Internet connection status
- PWA server reachability check
- Offline support via service worker
- Installable as a PWA

## Running the App

Serve the project with any simple HTTP server.
Example using Python:
`python -m http.server`

Then open:
[http://localhost:8000](http://localhost:8000)

This is also deployed on [GitHub-Pages](https://botblake.github.io/wta_pwa/).

## Notes

If you change the service worker or manifest, you may need to clear the browser cache or reinstall the PWA for changes to take effect.

## Preview

![preview-image](https://github.com/user-attachments/assets/e1c6ee0f-a1ca-4508-9105-03c22824339a)
