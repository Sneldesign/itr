export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  dietary?: string[];
  isSpecial?: boolean;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface MenuSection {
  id: string;
  label: string;
  categories: MenuCategory[];
}

export const menuData: MenuSection[] = [
  {
    id: 'diner',
    label: 'Diner',
    categories: [
      {
        title: 'Antipasti (Voorgerechten)',
        items: [
          { name: 'Misto Terra (voor 2 personen)', price: '€ 27,50', description: 'Mix van Sardijnse kazen, salsiccia, prosciutto sardo en olijven.', isSpecial: true },
          { name: 'Bruschetta', price: '€ 7,00', description: 'Huisgemaakt brood met een mix van tomaat, ui en basilicum.', dietary: ['vegan'] },
          { name: 'Focaccia', price: '€ 8,50', description: 'Vulling van verse tomaat, basilicum en ui.', dietary: ['vegan'] },
          { name: 'Focaccia Bianca e Peccorino', price: '€ 10,00', description: 'Vulling van paddenstoelen.', dietary: ['veg'] },
          { name: 'Prosciutto e Melone', price: '€ 13,00', description: 'Meloen met prosciutto sardo.' },
          { name: 'Carpaccio di Manzo', price: '€ 14,00', description: 'Carpaccio van rundvlees.' },
          { name: 'Verdure Grigliate', price: '€ 13,00', description: 'Gegrilde groente.', dietary: ['vegan'] },
          { name: 'Mozzarella di Buffala', price: '€ 12,50', description: 'Tomaat met truffel mozzarella en olijfolie.', dietary: ['veg'] },
          { name: 'Mozzarella in Crosta', price: '€ 11,00', description: 'Gepaneerde mozzarella.', dietary: ['veg'] },
          { name: 'Pizza Bianca', price: '€ 6,00', description: 'Pizza met rozemarijn, zout en olijfolie.', dietary: ['vegan'] },
          { name: 'Insalata di Tonno', price: '€ 14,00', description: 'Tonijn salade met tomaat en ui.', isSpecial: true },
          { name: 'Cocktail di Gamberi', price: '€ 14,00', description: 'Garnalen met cocktailsaus.' },
          { name: 'Carpaccio di Tonno', price: '€ 15,00', description: 'Carpaccio van tonijn.' },
          { name: 'Carpaccio di Polpo', price: '€ 14,00', description: 'Carpaccio van inktvis.' },
          { name: 'Misto Mare (voor 2 personen)', price: '€ 35,00', description: 'Mix van diverse visgerechten.', isSpecial: true },
        ]
      },
      {
        title: 'Primi Piatti (Pasta & Risotto)',
        items: [
          { name: 'Al Tonno Rosso', price: '€ 15,50', description: 'Tomatensaus met tonijn.' },
          { name: 'Tricolore', price: '€ 9,50', description: 'Tomatensaus met basilicum en Parmezaanse kaas.', dietary: ['veg'] },
          { name: 'Alla Boscaiola', price: '€ 11,50', description: 'Champignon roomsaus.', dietary: ['veg'] },
          { name: 'Dell\'Ortolano', price: '€ 12,50', description: 'Saus van verse paprika, basilicum en ei.', dietary: ['veg'] },
          { name: 'Alla Carbonara', price: '€ 15,00', description: 'Guanciale en crème van ei en Parmezaanse kaas.' },
          { name: 'Al Ragú', price: '€ 12,00', description: 'Tomatensaus met gehakt.' },
          { name: 'Olio Aglio e Peperoncino', price: '€ 9,50', description: 'Olijfolie, knoflook en pikante pepers.', dietary: ['spicy', 'veg'] },
          { name: 'Malloreddus alle Campidanese', price: '€ 15,50', description: 'Huisgemaakte Sardijnse pasta met tomatensaus en salsiccia.', isSpecial: true },
          { name: 'Ravioli di Casa', price: '€ 16,50', description: 'Huisgemaakte ravioli met ricotta en spinazie in tomatensaus.', dietary: ['veg'] },
          { name: 'Lasagne al Forno', price: '€ 13,50', description: 'Lasagne van ragù, bechamel en Parmezaanse kaas.' },
          { name: 'Melanzane alla Parmigiana', price: '€ 13,50', description: 'Aubergine met tomatensaus en Parmezaanse kaas uit de oven.', dietary: ['veg'] },
          { name: 'Risotto Funghi', price: '€ 14,00', description: 'Risotto met champignons.', dietary: ['veg'] },
          { name: 'Tortellini e Pane e Prosciutto', price: '€ 14,00', description: 'Tortellini in een roomsaus met ham.' },
          { name: 'Spaghetti allo Scoglio', price: '€ 18,50', description: 'Spaghetti met diverse zeevruchten.' },
          { name: 'Spaghetti alle Vongole', price: '€ 17,50', description: 'Spaghetti met venusschelpen.' },
          { name: 'Risotto alla Pescatora', price: '€ 18,50', description: 'Risotto met diverse zeevruchten.' },
          { name: 'Culurgiones', price: '€ 17,50', description: 'Huisgemaakte Sardijnse ravioli gevuld met aardappel, pecorino en munt.', isSpecial: true },
        ]
      },
      {
        title: 'Secondi Piatti (Vlees & Vis)',
        items: [
          { name: 'Calamari alla Griglia', price: '€ 22,50', description: 'Gegrilde inktvis.' },
          { name: 'Calamari Fritti', price: '€ 21,50', description: 'Gefrituurde inktvisringen.' },
          { name: 'Grigliata Mista di Pesce', price: '€ 27,50', description: 'Mix van diverse gegrilde vissoorten.', isSpecial: true },
          { name: 'Tonno alla Griglia', price: '€ 24,50', description: 'Gegrilde tonijnsteak.' },
          { name: 'Tagliata di Manzo', price: '€ 24,50', description: 'Gegrilde ossenhaas in plakjes geserveerd.' },
          { name: 'Scaloppina al Limone', price: '€ 19,50', description: 'Kalfslapjes in citroensaus.' },
          { name: 'Scaloppina ai Funghi', price: '€ 21,50', description: 'Kalfslapjes in champignonsaus.' },
          { name: 'Porceddu Sardo', price: '€ 27,50', description: 'Traditioneel Sardijns speenvarken uit de oven.', isSpecial: true },
        ]
      },
      {
        title: 'Pizza',
        items: [
          { name: 'Margherita', price: '€ 9,50', description: 'Tomaat, mozzarella en basilicum.', dietary: ['veg'] },
          { name: 'Borromea', price: '€ 11,50', description: 'Tomaat, mozzarella en ham.' },
          { name: 'Funghi', price: '€ 11,00', description: 'Tomaat, mozzarella en champignons.', dietary: ['veg'] },
          { name: 'Salami', price: '€ 11,50', description: 'Tomaat, mozzarella en salami.' },
          { name: 'Peperoni', price: '€ 11,50', description: 'Tomaat, mozzarella en pikante salami.', dietary: ['spicy'] },
          { name: 'Tonno e Cipolla', price: '€ 13,50', description: 'Tomaat, mozzarella, tonijn en ui.' },
          { name: 'Quattro Formaggi', price: '€ 14,00', description: 'Tomaat en vier soorten kaas.', dietary: ['veg'] },
          { name: 'Quattro Stagioni', price: '€ 14,00', description: 'Tomaat, mozzarella, ham, salami, champignons en paprika.' },
          { name: 'Vegetariana', price: '€ 13,50', description: 'Tomaat, mozzarella en diverse groenten.', dietary: ['veg'] },
          { name: 'Calzone', price: '€ 13,50', description: 'Dubbelgevouwen pizza met tomaat, mozzarella, ham, salami en champignons.' },
          { name: 'Al Tonno Rosso', price: '€ 15,50', description: 'Tomaat, mozzarella, tonijn, kappertjes en olijven.' },
          { name: 'Carbonara', price: '€ 15,00', description: 'Tomaat, mozzarella, spek, ei en Parmezaanse kaas.' },
          { name: 'Frutti di Mare', price: '€ 15,50', description: 'Tomaat, mozzarella en zeevruchten.' },
          { name: 'Pizza Il Tonno Rosso', price: '€ 17,50', description: 'Specialiteit van het huis met verse ingrediënten.', isSpecial: true },
          { name: 'Napoletana', price: '€ 12,00', description: 'Tomaat, mozzarella, ansjovis en kappertjes.' },
          { name: 'Capricciosa', price: '€ 14,00', description: 'Tomaat, mozzarella, ham, champignons, artisjokken en olijven.' },
          { name: 'Hawaii', price: '€ 12,50', description: 'Tomaat, mozzarella, ham en ananas.' },
          { name: 'Pollo', price: '€ 14,00', description: 'Tomaat, mozzarella, kip en paprika.' },
        ]
      },
      {
        title: 'Contorni (Bijgerechten)',
        items: [
          { name: 'Patate Fritte', price: '€ 4,50', description: 'Portie friet.' },
          { name: 'Insalata Mista', price: '€ 5,50', description: 'Gemengde salade.' },
          { name: 'Pane e Burro', price: '€ 4,00', description: 'Brood met boter.' },
        ]
      },
      {
        title: 'Dolce (Dessert)',
        items: [
          { name: 'Tiramisu', price: '€ 7,50', description: 'Huisgemaakte tiramisu.' },
          { name: 'Panna Cotta', price: '€ 7,00', description: 'Huisgemaakte panna cotta.' },
          { name: 'Cannoli Siciliani', price: '€ 6,50', description: 'Siciliaanse koekjes gevuld met ricotta.' },
          { name: 'Seadas', price: '€ 8,50', description: 'Traditioneel Sardijns dessert met kaas en honing.', isSpecial: true },
          { name: 'Gelato Misto', price: '€ 6,50', description: 'Mix van diverse smaken ijs.' },
          { name: 'Formaggi Sardi', price: '€ 12,50', description: 'Selectie van Sardijnse kazen.' },
        ]
      }
    ]
  },
  {
    id: 'wijnkaart',
    label: 'Wijnkaart',
    categories: [
      {
        title: 'Vino Rosso (Rode Wijn)',
        items: [
          { name: 'Vino della Casa - Grotta Rossa', price: '€ 28,00', description: 'Carignano - Cantina di Santadi | Intens - Fruitig' },
          { name: 'Primo Solco', price: '€ 31,00', description: 'Carignano - Eural Sulcis | Aardse tonen - Rood fruit' },
          { name: 'Antigua', price: '€ 31,00', description: 'Monica & Carignano - Cantina di Santadi | Zwarte bessen - Blauwe bessen' },
          { name: 'Araja', price: '€ 38,00', description: 'Carignano & Sangiovese - Cantina di Santadi | Licht kruidig - Lichte tannines' },
          { name: 'Janas', price: '€ 38,00', description: 'Carignano - Eural Sulcis | Warm - Vanille' },
          { name: 'Solky', price: '€ 48,00', description: 'Carignano - Eural Sulcis | Licht kruidig - Rode bessen' },
          { name: 'Noras', price: '€ 48,00', description: 'Cannonau & Carignano - Cantina di Santadi | Kruidig - Chocolade - Tannine' },
          { name: 'Rocca Rubia', price: '€ 48,00', description: 'Carignano - Cantina di Santadi | Fruitig - Vanille - Stevig', isSpecial: true },
          { name: 'Shardana', price: '€ 62,00', description: 'Carignano - Cantina di Santadi | Bloemig - Zwarte Peper' },
          { name: 'Terre Brune', price: '€ 87,00', description: 'Carignano & Bovaleddu | Pruim - Tobacco - Chocolade - Warm', isSpecial: true },
        ]
      },
      {
        title: 'Vino Bianca (Witte Wijn)',
        items: [
          { name: 'Vino della Casa - Villa Solais', price: '€ 28,00', description: 'Vermentino & Nuragus - Cantina di Santadi | Fris - Mineralen' },
          { name: 'Pedraia', price: '€ 31,00', description: 'Nuragus & Vermentino - Cantina di Santadi | Fruitig - Vettig' },
          { name: 'Cala Silente', price: '€ 35,00', description: 'Vermentino - Cantina di Santadi | Appel - Citrus' },
          { name: 'Costamolino', price: '€ 38,00', description: 'Vermentino - Argiolas | Fris' },
          { name: 'Ville di Chiesa', price: '€ 61,50', description: 'Vermentino & Chardonnay - Cantina di Santadi | Exotisch fruit - Vettig - Banaan', isSpecial: true },
        ]
      },
      {
        title: 'Vino Rosata (Rosé)',
        items: [
          { name: 'Tre Torri', price: '€ 35,00', description: 'Carignano - Cantina di Santadi | Fruitig' },
        ]
      },
      {
        title: 'Vino Frizzante (Mousserend)',
        items: [
          { name: 'Prosecco BIO', price: '€ 28,50', description: 'Anno Domino - DOC extra brut | Fluweel zacht, fris en fruitig' },
          { name: 'Solais', price: '€ 45,00', description: 'Santadi - Vino soumante methodo classico | Elegante ziltigheid en tonen van mineralen en abrikoos', isSpecial: true },
          { name: 'Lambrusco Rosso', price: '€ 26,50', description: 'Fles' },
          { name: 'Lambrusco Bianco', price: '€ 26,50', description: 'Fles' },
        ]
      },
      {
        title: 'Vino da Dessert',
        items: [
          { name: 'Latinia', price: '€ 7,50', description: 'Vino da uve stramature - Cantina di Santadi | Honing - Karamel - Vanille' },
          { name: 'Festa Norìa', price: '€ 7,50', description: 'Versterkte wijn - Cantina di Santadi | Warm - Kaneel - Kruidig' },
        ]
      }
    ]
  },
  {
    id: 'afhaalmenu',
    label: 'Afhaalmenu',
    categories: [
      {
        title: 'Antipasti (Voorgerechten)',
        items: [
          { name: 'Misto Terra (2 pers.)', price: '€ 27,50', description: 'Mix van Sardijnse kazen, salsiccia, prosciutto sardo en olijven.', isSpecial: true },
          { name: 'Bruschetta', price: '€ 7,00', description: 'Huisgemaakt brood met een mix van tomaat, ui en basilicum.', dietary: ['vegan'] },
          { name: 'Focaccia', price: '€ 8,50', description: 'Vulling van verse tomaat, basilicum en ui.', dietary: ['vegan'] },
          { name: 'Prosciutto e Melone', price: '€ 13,00', description: 'Meloen met prosciutto sardo.' },
          { name: 'Carpaccio di Manzo', price: '€ 14,00', description: 'Carpaccio van rundvlees.' },
          { name: 'Verdure Grigliate', price: '€ 13,00', description: 'Gegrilde groente.', dietary: ['vegan'] },
          { name: 'Mozzarella di Buffala', price: '€ 12,50', description: 'Tomaat met truffel mozzarella en olijfolie.', dietary: ['veg'] },
          { name: 'Mozzarella in Crosta', price: '€ 11,00', description: 'Gepaneerde mozzarella.', dietary: ['veg'] },
          { name: 'Pizza Bianca', price: '€ 6,00', description: 'Pizza met rozemarijn, zout en olijfolie.', dietary: ['vegan'] },
          { name: 'Insalata di Tonno', price: '€ 14,00', description: 'Tonijn salade met tomaat en ui.', isSpecial: true },
          { name: 'Cocktail di Gamberi', price: '€ 14,00', description: 'Garnalen met cocktailsaus.' },
          { name: 'Carpaccio di Tonno', price: '€ 15,00', description: 'Carpaccio van tonijn.' },
          { name: 'Carpaccio di Polpo', price: '€ 14,00', description: 'Carpaccio van inktvis.' },
        ]
      },
      {
        title: 'Pasta',
        items: [
          { name: 'Al Tonno Rosso', price: '€ 15,50', description: 'Tomatensaus met tonijn.' },
          { name: 'Tricolore', price: '€ 9,50', description: 'Tomatensaus met basilicum en Parmezaanse kaas.', dietary: ['veg'] },
          { name: 'Alla Boscaiola', price: '€ 11,50', description: 'Champignon roomsaus.', dietary: ['veg'] },
          { name: 'Dell\'Ortolano', price: '€ 12,50', description: 'Saus van verse paprika, basilicum en ei.', dietary: ['veg'] },
          { name: 'Alla Carbonara', price: '€ 15,00', description: 'Guanciale en crème van ei en Parmezaanse kaas.' },
          { name: 'Al Ragú', price: '€ 12,00', description: 'Tomatensaus met gehakt.' },
          { name: 'Olio Aglio e Peperoncino', price: '€ 9,50', description: 'Olijfolie, knoflook en pikante pepers.', dietary: ['spicy', 'veg'] },
          { name: 'Malloreddus alle Campidanese', price: '€ 15,50', description: 'Huisgemaakte Sardijnse pasta met tomatensaus en salsiccia.', isSpecial: true },
          { name: 'Ravioli di Casa', price: '€ 16,50', description: 'Huisgemaakte ravioli met ricotta en spinazie in tomatensaus.', dietary: ['veg'] },
          { name: 'Lasagne al Forno', price: '€ 13,50', description: 'Lasagne van ragù, bechamel en Parmezaanse kaas.' },
          { name: 'Melanzane alla Parmigiana', price: '€ 13,50', description: 'Aubergine met tomatensaus en Parmezaanse kaas uit de oven.', dietary: ['veg'] },
          { name: 'Risotto Funghi', price: '€ 14,00', description: 'Risotto met champignons.', dietary: ['veg'] },
          { name: 'Tortellini e Pane e Prosciutto', price: '€ 14,00', description: 'Tortellini in een roomsaus met ham.' },
        ]
      },
      {
        title: 'Pizza',
        items: [
          { name: 'Margherita', price: '€ 9,50', description: 'Tomaat, mozzarella en basilicum.', dietary: ['veg'] },
          { name: 'Borromea', price: '€ 11,50', description: 'Tomaat, mozzarella en ham.' },
          { name: 'Funghi', price: '€ 11,00', description: 'Tomaat, mozzarella en champignons.', dietary: ['veg'] },
          { name: 'Salami', price: '€ 11,50', description: 'Tomaat, mozzarella en salami.' },
          { name: 'Peperoni', price: '€ 11,50', description: 'Tomaat, mozzarella en pikante salami.', dietary: ['spicy'] },
          { name: 'Tonno e Cipolla', price: '€ 13,50', description: 'Tomaat, mozzarella, tonijn en ui.' },
          { name: 'Quattro Formaggi', price: '€ 14,00', description: 'Tomaat en vier soorten kaas.', dietary: ['veg'] },
          { name: 'Quattro Stagioni', price: '€ 14,00', description: 'Tomaat, mozzarella, ham, salami, champignons en paprika.' },
          { name: 'Vegetariana', price: '€ 13,50', description: 'Tomaat, mozzarella en diverse groenten.', dietary: ['veg'] },
          { name: 'Calzone', price: '€ 13,50', description: 'Dubbelgevouwen pizza met tomaat, mozzarella, ham, salami en champignons.' },
          { name: 'Al Tonno Rosso', price: '€ 15,50', description: 'Tomaat, mozzarella, tonijn, kappertjes en olijven.' },
          { name: 'Carbonara', price: '€ 15,00', description: 'Tomaat, mozzarella, spek, ei en Parmezaanse kaas.' },
          { name: 'Frutti di Mare', price: '€ 15,50', description: 'Tomaat, mozzarella en zeevruchten.' },
          { name: 'Pizza Il Tonno Rosso', price: '€ 17,50', description: 'Specialiteit van het huis met verse ingrediënten.', isSpecial: true },
          { name: 'Napoletana', price: '€ 12,00', description: 'Tomaat, mozzarella, ansjovis en kappertjes.' },
          { name: 'Capricciosa', price: '€ 14,00', description: 'Tomaat, mozzarella, ham, champignons, artisjokken en olijven.' },
          { name: 'Hawaii', price: '€ 12,50', description: 'Tomaat, mozzarella, ham en ananas.' },
          { name: 'Pollo', price: '€ 14,00', description: 'Tomaat, mozzarella, kip en paprika.' },
        ]
      }
    ]
  },
  {
    id: 'aperitief',
    label: 'Aperitief',
    categories: [
      {
        title: 'Vino Frizzante',
        items: [
          { name: 'Prosecco', price: 'Glas € 6,50 / Fles € 32,50' },
          { name: 'Prosecco Rosé', price: 'Glas € 7,00 / Fles € 35,00' },
          { name: 'Franciacorta', price: 'Fles € 55,00', description: 'De "Champagne" van Italië.', isSpecial: true },
        ]
      },
      {
        title: 'Cocktails',
        items: [
          { name: 'Aperol Spritz', price: '€ 8,50' },
          { name: 'Limoncello Spritz', price: '€ 8,50' },
          { name: 'Campari Spritz', price: '€ 9,00' },
          { name: 'Negroni', price: '€ 10,00' },
          { name: 'Negroni Sbagliato', price: '€ 9,50' },
          { name: 'Americano', price: '€ 9,00' },
          { name: 'Gin Tonic (Sardijnse Gin)', price: '€ 12,50' },
        ]
      },
      {
        title: 'Non-Alcolico',
        items: [
          { name: 'Crodino', price: '€ 4,50' },
          { name: 'Sanbitter', price: '€ 4,50' },
          { name: 'Mocktail van het huis', price: '€ 7,50' },
        ]
      },
      {
        title: 'Birra (Bier)',
        items: [
          { name: 'Ichnusa (Sardijns bier)', price: '€ 5,00' },
          { name: 'Ichnusa Non Filtrata', price: '€ 5,50' },
          { name: 'Peroni', price: '€ 4,50' },
          { name: 'Heineken', price: '€ 4,50' },
          { name: 'Alcoholvrij bier', price: '€ 4,50' },
        ]
      },
      {
        title: 'Antipasti (Hapjes)',
        items: [
          { name: 'Tagliere Misto (2 pers.)', price: '€ 25,00', description: 'Mix van Sardijnse kazen en vleeswaren.', isSpecial: true },
          { name: 'Pane e Olio', price: '€ 4,50', description: 'Brood met olijfolie en zout.', dietary: ['vegan'] },
          { name: 'Olive Marinate', price: '€ 4,50', description: 'Gemarineerde olijven.', dietary: ['vegan'] },
          { name: 'Bruschetta Pomodoro (4 stuks)', price: '€ 8,00', description: 'Bruschetta met tomaat en basilicum.', dietary: ['vegan'] },
        ]
      },
      {
        title: 'Dolce',
        items: [
          { name: 'Tiramisu', price: '€ 7,50' },
          { name: 'Panna Cotta', price: '€ 7,00' },
          { name: 'Cannoli Siciliani', price: '€ 6,50' },
        ]
      }
    ]
  }
];
