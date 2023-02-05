## Absence Manager

- a way for company owners to manage sickness and vacations of employees.
- Frontend App: https://absence-manager-kapil5harma.vercel.app
- Absence API: https://absence-manager-kapil5harma.vercel.app/api/absence
- Member API: https://absence-manager-kapil5harma.vercel.app/api/member

## Tools Used:

- Framework: [Next.js](https://nextjs.org/)
- UI: [Material UI](https://mui.com/)
- Testing: Jest, React Testing Library
- Others: Axios, ESLint, Prettier, TypeScript

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

API routes can be accessed on:

- GET: [http://localhost:3000/api/member](http://localhost:3000/api/member). This endpoint can be edited in `pages/api/member.ts`.
- GET: [http://localhost:3000/api/absence](http://localhost:3000/api/absence). This endpoint can be edited in `pages/api/absence.ts`.

Frontend app can be accessed on:

- [http://localhost:3000](http://localhost:3000)

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Product Requirements

- [x] I want to see a list of absences including the names of the employees.
- [x] I want to see the first 10 absences, with the ability to paginate.
- [x] I want to see a total number of absences.
- [x] For each absence I want to see:
  - [x] Member name
  - [x] Type of absence
  - [x] Period
  - [x] Member note (when available)
  - [x] Status (can be 'Requested', 'Confirmed' or 'Rejected')
  - [x] Admitter note (when available)
- [x] I want to filter absences by type.
- [x] I want to filter absences by date.
- [x] I want to see a loading state until the list is available.
- [x] I want to see an error state if the list is unavailable.
- [x] I want to see an empty state if there are no results.
- [ ] (Bonus) I can generate an iCal file and import it into outlook.
- [x] (Bonus) Create an API to fetch members and absences.
