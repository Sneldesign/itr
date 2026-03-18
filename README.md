# Il Tonno Rosso - Website

Dit is de broncode voor de nieuwe website van het Italiaanse restaurant **Il Tonno Rosso** in Zeddam. De website is gebouwd met moderne technologieën voor een snelle, interactieve en mobielvriendelijke ervaring.

## Technologieën

- **React 19**: Voor een krachtige en modulaire frontend.
- **Vite**: Voor een razendsnelle ontwikkelomgeving en build-proces.
- **Tailwind CSS 4**: Voor een modern en responsive design met utility-first classes.
- **Motion (Framer Motion)**: Voor vloeiende scroll-animaties en interacties.
- **Lucide React**: Voor een consistente set iconen.
- **TypeScript**: Voor type-veiligheid en betere onderhoudbaarheid.

## Aan de slag

Volg deze stappen om het project lokaal te draaien:

### 1. Vereisten

Zorg ervoor dat je [Node.js](https://nodejs.org/) (versie 18 of hoger) op je computer hebt geïnstalleerd.

### 2. Installatie

Clone de repository of download de bestanden en navigeer naar de projectmap in je terminal. Voer daarna het volgende commando uit om alle benodigde pakketten te installeren:

```bash
npm install
```

### 3. Ontwikkeling

Start de lokale ontwikkelserver met:

```bash
npm run dev
```

De website is nu bereikbaar op `http://localhost:3000` (of een andere poort die in de terminal wordt aangegeven).

### 4. Bouwen voor productie

Om een geoptimaliseerde versie van de website te maken voor productie, gebruik je:

```bash
npm run build
```

De bestanden worden gegenereerd in de `dist/` map. Deze map kun je vervolgens uploaden naar je hostingprovider.

## Projectstructuur

- `src/App.tsx`: De hoofdcomponent met alle pagina-logica en routing.
- `src/data/menuData.ts`: De volledige, gecategoriseerde menukaart met gerechten, prijzen en dieetwensen.
- `src/index.css`: Globale stijlen en Tailwind configuratie.
- `public/`: Statische bestanden zoals afbeeldingen en het logo.

## Licentie

Dit project is gebouwd voor Il Tonno Rosso. Alle rechten voorbehouden.
