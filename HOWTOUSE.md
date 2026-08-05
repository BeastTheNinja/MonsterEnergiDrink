# Monster Energy Drink Frontend

Dette er frontend-delen af Monster Energy Drink projektet. Den er bygget med React, TypeScript og Vite, og den henter data fra et separat backend API.

## Teknologier

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Fetch API

## Formål

Frontend viser produkter fra Monster API'et, og der arbejdes videre med funktioner som login, produktdetaljer, favoritter og produktoprettelse.

## Kør projektet

1. Installer dependencies i frontend-mappen.
2. Start udviklingsserveren.
3. Sørg for, at backend API'et kører på localhost:4000.

## Struktur

### component

Indeholder genbrugelige komponenter som navbar og pages.

### pages

Indeholder skærmbilleder som HomePage, LoginPage og ProductsPage.

### services

Indeholder API-kald til authentication, produkter og brugere.

## API-forbindelse

Frontend kommunikerer med backend via fetch-kald til:

- <http://localhost:4000/api/auth>
- <http://localhost:4000/api/products>
- <http://localhost:4000/api/users>
- <http://localhost:4000/api/favorites>

Tokens gemmes i localStorage og bruges til autoriserede requests.

## Vigtige noter

- Login bruger access token og refresh token.
- Produktdata kommer fra backend API'et.
- Frontend er lavet til at kunne udbygges med flere komponenter og funktioner.
