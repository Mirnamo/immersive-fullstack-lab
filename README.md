# Immersive Full-Stack Lab

Seven portfolio-grade 3D product experiences in one cohesive React application:

1. Atelier 3D — luxury product configurator
2. FacilityOS — operational digital twin
3. Forma Space — collaborative room planner
4. Aperture Estates — immersive real estate
5. Velocity Studio — automotive configurator
6. Nexus Cloud — infrastructure explorer
7. Aion Museum — digital collection

## What this demonstrates

- React application architecture and client-side routing
- React Three Fiber / Three.js interactive scenes
- Project-specific business workflows
- Netlify Functions API with GET and POST handling
- Resilient local persistence fallback
- Responsive, touch-friendly visual design
- Netlify-ready redirects and deployment configuration

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Netlify detects the included `netlify.toml`, publishes `dist`, and exposes the serverless API under `/api/*`.

## Portfolio note

The application uses deliberately synthetic products, facilities, listings, and artifacts. No employer or client materials are included.
