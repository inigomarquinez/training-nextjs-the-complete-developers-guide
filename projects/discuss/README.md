This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Used libraries

### [NextUI](https://nextui.org/)

Installation guide [here](https://nextui.org/docs/guide/installation)

### [prisma](https://www.prisma.io/)

1. Configure the datasource provider

```
npx prisma init --datasource-provider SQLite
```

2. Create the schema file in `schema.prisma`.

3. Generate the database assigning a name to the migration

```
npx prisma migrate dev
```

### [next-auth](https://next-auth.js.org/)

1. First, in GitHub, we need to create a new OAuth application [here](https://github.com/settings/applications/new)
2. We need to add `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` and `AUTH_SECRET` to the `.env.local` file.
3. Install `@auth/core`, `@auth/prisma-adapter` and `next-auth` libraries.
