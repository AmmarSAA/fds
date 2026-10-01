# Foodies portfolio demo

React + Vite restaurant browsing demo. Ordering, payments and account sign-in are not connected to a backend.

## Development

```sh
npm ci
npm run dev
```

## Deployment

```sh
npm run build
```

The build copies restaurant and dish images into `dist/Images`. Hash routing supports static hosting and page reloads. Set `VITE_BASE_PATH=/fds/` for the GitHub Pages repository URL; leave it unset for root-domain hosting such as Vercel.

The Pages workflow deploys `main` and the `codex/repair-fds-deployment` branch. The default branch remains unchanged until the repair pull request is merged.
