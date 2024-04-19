# RJM SvelteKit Template

This is my personal SvelteKit Git Repo template. It is licensed under GNU's GPL V2.0

## Features

- Prisma configured for a PostgreSQL database w/ a sample model
- A simple CSS style
- Carbon Design System
- Functional containerisation system
- Barebones Lucia authentication system for GitHub OAuth

## Setup:

1. Clone the repository

```bash
git clone https://github.com/RJMurg/SvelteKit-Template.git
```

2. Install the dependencies

```bash
npm install
```

3. Create your .env

- a) Rename the `.env.example` to `.env`
- b) Replace the sample fields with their correct values

4. Complete a database migrations

```bash
npx prisma migrate dev
```

5. Get your GitHub Keys for OAuth
   See instructions [here](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app).

6. Run the development server

```bash
npm run dev
```

You are now ready to develop!
