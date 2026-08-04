# Monster Energy Drink

Et simpelt React-baseret site, hvor man kan se forskellige Monster energidrikke, læse produktdetaljer og arbejde videre med funktioner som login, favoritter og produktoprettelse.

Projektet er lavet som en øvelsesopgave med fokus på at træne React, komponentstruktur, API-kald og genbrugelige løsninger, så det kan bruges som boilerplate til svendeprøven.

## Opgavebeskrivelse

I denne opgave skal der bygges et site, der viser forskellige Monster energidrikke. Sitet skal vise produkter med billede og tekst, og det skal være muligt at klikke ind på et enkelt produkt og læse mere om det.

Data hentes fra et separat API, som skal klones og installeres fra GitHub. API'et bruger en database for at kunne køre.

## Krav til løsningen

Sitet skal leve op til følgende krav:

- der skal være sektioner med header, main, footer og nav
- sitet skal være responsivt
- sitet skal leve op til gængse krav om semantisk korrekt kode
- der skal være validering på alle formularer

## Funktioner i opgaven

### Produktliste

Hent og præsenter en liste af produkter fra API'et. Hvert produkt vises med navn, billede og pris. Når man klikker på et produkt, skal man kunne se yderligere detaljer.

### Produktdetaljer

Hent og præsenter produktets detaljer med navn, billede, beskrivelse, pris og lagerbeholdning. Produktdata skal hentes fra API'et ud fra produktets slug via URL'en.

### Login

Lav en formular, så brugere kan logge ind med email og password.

### Tilføj favorit

Lav en funktion, så autoriserede brugere kan tilføje produkter til en favoritliste. Det skal også markeres på produktet, hvis det er en favorit, og det skal være muligt at fjerne produktet igen.

### Opret produkt

Lav en formular, så autoriserede brugere kan oprette nye produkter. Billedet kan enten uploades eller angives som en URL.

### Opret brugerprofil

Lav en formular, så nye brugere kan oprette en profil med navn, email og password. Når en bruger er oprettet, skal de kunne logge ind bagefter.

### Skift password

Lav en formular, så brugere kan skifte deres password.

## Projektstruktur

Projektet er delt op i to dele:

- frontend i React, TypeScript og Vite
- backend API i TypeScript med SQLite og Prisma

Frontend henter data fra backend via fetch-kald og viser det i komponenter og pages.

## Opsætning

### Backend

1. Klon API'et fra GitHub.
2. Installer dependencies.
3. Sørg for at database og environment variables er sat korrekt op.
4. Start backend-serveren.

### Frontend

1. Gå ind i frontend-mappen.
2. Installer dependencies.
3. Start udviklingsserveren.

## Links

- API repository: <https://github.com/Webudvikler-TechCollege/monster-api-ts-sqlite>
- Postman dokumentation: <https://documenter.getpostman.com/view/6540576/2sB3BAND9T>
- Figma design: <https://www.figma.com/design/NIS0qJwbPDGzp4XOFXuR8S/Monster?node-id=5-250&t=2UV3u5bHvnigeE0c-1>

## Status

Projektet er under udvikling og bruges som en del af min træning frem mod svendeprøven.

## Noter

- Produktdata hentes fra et separat API.
- Login håndteres med access token og refresh token.
- Frontend er bygget til at kunne genbruge komponenter senere.
