import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Menu, X, Phone, Mail, MapPin, Calendar, Users, Clock, ChevronRight, Instagram, Facebook } from 'lucide-react';
import { menuItems } from './data/menu';

// --- Types ---
type Page = 'home' | 'about' | 'menu' | 'reservation' | 'groups' | 'contact';

// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: Page, setActivePage: (p: Page) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string, value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Over Ons', value: 'about' },
    { label: 'Menu', value: 'menu' },
    { label: 'Groepen', value: 'groups' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-cream/95 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button onClick={() => setActivePage('home')} className="flex flex-col items-center">
          <div className="w-10 h-10 bg-brand-red mb-1 flex items-center justify-center text-white font-bold text-xs">ITR</div>
          <span className={`text-xl font-display tracking-widest uppercase transition-colors ${isScrolled ? 'text-brand-espresso' : 'text-white'}`}>
            Il Tonno Rosso
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => setActivePage(link.value)}
              className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-brand-red ${activePage === link.value ? 'text-brand-red border-b border-brand-red' : isScrolled ? 'text-brand-espresso' : 'text-white'}`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => setActivePage('reservation')}
            className="bg-brand-red text-white px-6 py-2 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-brand-espresso transition-colors"
          >
            Reserveer
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden transition-colors ${isScrolled ? 'text-brand-espresso' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-cream border-t border-brand-wood/10 shadow-xl p-6 flex flex-col space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => { setActivePage(link.value); setIsMobileMenuOpen(false); }}
                className={`text-lg uppercase tracking-widest font-medium text-left ${activePage === link.value ? 'text-brand-red' : 'text-brand-espresso'}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { setActivePage('reservation'); setIsMobileMenuOpen(false); }}
              className="bg-brand-red text-white py-3 rounded-lg text-center uppercase tracking-widest font-bold"
            >
              Reserveer een tafel
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setActivePage }: { setActivePage: (p: Page) => void }) => {
  return (
    <footer className="bg-brand-espresso text-brand-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-display mb-6">Il Tonno Rosso</h3>
          <p className="text-brand-cream/70 mb-6 font-serif italic text-lg">
            "Authentieke Sardijnse en Italiaanse gerechten met passie bereid."
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/iltonnorosso/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors"><Instagram size={24} /></a>
            <a href="https://www.facebook.com/Iltonnorosso/?locale=nl_NL" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors"><Facebook size={24} /></a>
          </div>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest font-bold mb-6 text-brand-red">Contact</h4>
          <ul className="space-y-4 text-brand-cream/80">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="mt-1 text-brand-red" />
              <span>Oude Doetinchemseweg 63<br />7038 BG Zeddam</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-brand-red" />
              <span>0314 785 066</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-brand-red" />
              <span>info@iltonnorosso.nl</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest font-bold mb-6 text-brand-red">Openingstijden</h4>
          <ul className="space-y-2 text-brand-cream/80">
            <li className="flex justify-between"><span>Maandag</span> <span>17:00 – 21:00</span></li>
            <li className="flex justify-between text-brand-red/50"><span>Dinsdag</span> <span>Gesloten</span></li>
            <li className="flex justify-between text-brand-red/50"><span>Woensdag</span> <span>Gesloten</span></li>
            <li className="flex justify-between"><span>Donderdag</span> <span>17:00 – 21:00</span></li>
            <li className="flex justify-between"><span>Vrijdag</span> <span>17:00 – 21:00</span></li>
            <li className="flex justify-between"><span>Zaterdag</span> <span>17:00 – 21:00</span></li>
            <li className="flex justify-between"><span>Zondag</span> <span>17:00 – 21:00</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-brand-cream/10 text-center text-sm text-brand-cream/40">
        &copy; {new Date().getFullYear()} Il Tonno Rosso. Alle rechten voorbehouden.
      </div>
    </footer>
  );
};

// --- Page Content Components ---

const Home = ({ setActivePage }: { setActivePage: (p: Page) => void }) => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1920" 
            alt="Italian Restaurant Interior" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-9xl text-brand-cream mb-4 font-display tracking-tighter">
              IL TONNO ROSSO
            </h1>
            <p className="text-xl md:text-3xl text-brand-cream/90 font-serif italic mb-12">
              Cucina Tipica Italiana
            </p>
            <p className="text-brand-cream/80 max-w-2xl mx-auto mb-12 text-lg md:text-xl font-light tracking-wide uppercase">
              Authentieke Sardijnse en Italiaanse gerechten in het hart van Zeddam
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => setActivePage('reservation')}
                className="bg-brand-red text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-brand-cream hover:text-brand-espresso transition-all duration-300 w-full md:w-auto"
              >
                Reserveer een tafel
              </button>
              <button 
                onClick={() => setActivePage('menu')}
                className="border border-brand-cream text-brand-cream px-10 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-brand-cream hover:text-brand-espresso transition-all duration-300 w-full md:w-auto"
              >
                Bekijk het menu
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-cream/50"
        >
          <div className="w-px h-16 bg-brand-cream/30 mx-auto"></div>
          <span className="text-[10px] uppercase tracking-widest mt-4 block">Scroll</span>
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-32 bg-brand-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-red uppercase tracking-[0.3em] font-bold text-sm mb-6 block">Onze Passie</span>
            <h2 className="text-5xl md:text-7xl mb-8 leading-tight">Daniela & Denis</h2>
            <p className="text-xl text-brand-espresso/80 font-serif italic mb-8 leading-relaxed">
              Il Tonno Rosso is ruim 10 jaar geleden gestart door Daniela en Denis. 
              Zij verhuisden van Sardinië naar Nederland om hun passie voor de Italiaanse keuken te delen.
            </p>
            <p className="text-brand-espresso/70 mb-10 leading-relaxed">
              Met authentieke Sardijnse en Italiaanse gerechten brengen wij de smaken van onze jeugd naar Zeddam. 
              Onze ingrediënten worden zoveel mogelijk rechtstreeks uit Sardinië geïmporteerd om de hoogste kwaliteit en authenticiteit te garanderen.
            </p>
            <button 
              onClick={() => setActivePage('about')}
              className="group flex items-center space-x-3 text-brand-red font-bold uppercase tracking-widest text-sm"
            >
              <span>Lees meer over ons</span>
              <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
          <div className="relative">
            <motion.div 
              style={{ rotate: rotate }}
              className="absolute -top-10 -right-10 w-40 h-40 border border-brand-olive/20 rounded-full z-0"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800" 
                alt="Chef preparing food" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Preview / Categories */}
      <section className="py-32 bg-brand-espresso text-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl mb-6">Smaak van Italië</h2>
            <p className="text-brand-cream/60 uppercase tracking-widest text-sm">Pizza • Pasta • Vis • Vlees • Italiaanse klassiekers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Pizza', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600' },
              { title: 'Pasta', img: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=600' },
              { title: 'Vis', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600' },
              { title: 'Vlees', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600' }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-96 overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setActivePage('menu')}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-4xl text-white font-display tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-20">
            <button 
              onClick={() => setActivePage('menu')}
              className="bg-brand-red text-white px-12 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-brand-cream hover:text-brand-espresso transition-all duration-300"
            >
              Bekijk het volledige menu
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-brand-olive text-brand-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl mb-10 leading-tight">Beleef het echte Italië</h2>
            <p className="text-2xl font-serif italic mb-12 leading-relaxed">
              "Hier bij Il Tonno Rosso beleef je het echte Italië. Met zoveel mogelijk ingrediënten rechtstreeks uit Sardinië brengen we de traditionele smaken van Italië naar Nederland."
            </p>
            <div className="w-20 h-px bg-brand-cream/30 mx-auto mb-12"></div>
            <p className="uppercase tracking-[0.4em] text-xs font-bold">Daniela & Denis</p>
          </motion.div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-32 bg-brand-cream border-y border-brand-wood/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-8xl mb-10">Reserveer jouw tafel</h2>
          <p className="text-xl text-brand-espresso/60 mb-12 max-w-2xl mx-auto">
            Geniet van een onvergetelijke avond vol Italiaanse gastvrijheid en culinaire hoogstandjes.
          </p>
          <button 
            onClick={() => setActivePage('reservation')}
            className="bg-brand-red text-white px-16 py-6 rounded-full text-lg uppercase tracking-widest font-bold hover:bg-brand-espresso transition-all duration-300 shadow-xl"
          >
            Reserveer nu
          </button>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl mb-10">Vind ons in Zeddam</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-red shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest font-bold mb-2">Adres</h4>
                  <p className="text-lg text-brand-espresso/70">Oude Doetinchemseweg 63<br />7038 BG Zeddam, Nederland</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-red shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest font-bold mb-2">Telefoon</h4>
                  <p className="text-lg text-brand-espresso/70">0314 785 066</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-red shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest font-bold mb-2">Email</h4>
                  <p className="text-lg text-brand-espresso/70">info@iltonnorosso.nl</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-brand-wood/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.854061555544!2d6.25594437689163!3d51.91834997191003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c799a4e4e4e4e5%3A0x400de66c11d7e60!2sOude%20Doetinchemseweg%2063%2C%207038%20BG%20Zeddam!5e0!3m2!1snl!2snl!4v1710350000000!5m2!1snl!2snl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => (
  <div className="pt-32 pb-20">
    <div className="max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-brand-red uppercase tracking-[0.3em] font-bold text-sm mb-6 block">Ons Verhaal</span>
        <h1 className="text-6xl md:text-8xl mb-12">Daniela & Denis</h1>
        <div className="prose prose-lg max-w-none text-brand-espresso/80 font-serif italic text-xl leading-relaxed space-y-8">
          <p>
            Il Tonno Rosso is meer dan een restaurant; het is een stukje Sardinië in de Achterhoek. 
            Ruim 10 jaar geleden besloten Daniela en Denis hun droom te volgen en de authentieke smaken van hun geboorte-eiland naar Nederland te brengen.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=1200" 
            alt="Authentic Italian Kitchen" 
            className="rounded-2xl shadow-xl my-12"
            referrerPolicy="no-referrer"
          />
          <p className="not-italic font-sans text-base text-brand-espresso/70">
            Daniela, opgegroeid met de tradities van de Sardijnse keuken, en Denis, met zijn passie voor gastvrijheid, vormen het hart van de zaak. 
            Zij geloven in de kracht van eenvoud: verse ingrediënten, traditionele recepten en een warme, familiaire sfeer.
          </p>
          <p className="not-italic font-sans text-base text-brand-espresso/70">
            Veel van onze producten, zoals de Sardijnse worst, pecorino kaas en specifieke wijnen, worden rechtstreeks geïmporteerd uit Sardinië. 
            Dit zorgt ervoor dat elk gerecht dat onze keuken verlaat, de echte 'Cucina Tipica Italiana' beleving biedt.
          </p>
          <p className="not-italic font-sans text-base text-brand-espresso/70">
            Of u nu komt voor een snelle pizza uit de oven, een uitgebreid diner met verse vis of een gezellige avond met vrienden en familie, 
            bij Il Tonno Rosso bent u altijd welkom als onderdeel van onze familie.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);

const MenuPage = () => {
  const categories = ['Antipasti', 'Pizza', 'Pasta', 'Carne', 'Pesce', 'Dolci', 'Vini', 'Aperitivo'];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl mb-6">Menukaart</h1>
          <p className="text-brand-espresso/60 uppercase tracking-widest text-sm">Ontdek onze authentieke gerechten</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-widest font-bold transition-all ${activeCategory === cat ? 'bg-brand-red text-white shadow-lg' : 'bg-white text-brand-espresso hover:bg-brand-olive hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatePresence mode="wait">
            {menuItems.filter(item => item.category === activeCategory).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: idx * 0.05 }}
                className="flex justify-between items-start border-b border-brand-wood/10 pb-6 group"
              >
                <div className="max-w-[80%]">
                  <h3 className="text-2xl mb-2 group-hover:text-brand-red transition-colors">{item.name}</h3>
                  <p className="text-brand-espresso/60 font-serif italic">{item.description}</p>
                </div>
                <span className="text-xl font-bold text-brand-red">€ {item.price.toFixed(2).replace('.', ',')}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const ReservationPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-40 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-2xl shadow-2xl text-center max-w-lg mx-6 border border-brand-olive/10"
        >
          <div className="w-20 h-20 bg-brand-olive/10 text-brand-olive rounded-full flex items-center justify-center mx-auto mb-8">
            <Calendar size={40} />
          </div>
          <h2 className="text-4xl mb-6">Grazie!</h2>
          <p className="text-xl text-brand-espresso/70 mb-8 font-serif italic">
            Bedankt voor uw reserveringsaanvraag. Wij nemen zo snel mogelijk contact met u op om de reservering te bevestigen.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-brand-red font-bold uppercase tracking-widest text-sm hover:underline"
          >
            Nog een reservering maken
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl mb-6">Reserveren</h1>
          <p className="text-brand-espresso/60 uppercase tracking-widest text-sm">Reserveer uw tafel bij Il Tonno Rosso</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-brand-wood/5 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-espresso/50">Naam</label>
              <input required type="text" className="w-full border-b border-brand-wood/20 py-3 focus:border-brand-red outline-none transition-colors" placeholder="Uw volledige naam" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-espresso/50">Aantal personen</label>
              <div className="relative">
                <Users className="absolute left-0 top-3 text-brand-espresso/30" size={18} />
                <input required type="number" min="1" className="w-full border-b border-brand-wood/20 py-3 pl-8 focus:border-brand-red outline-none transition-colors" placeholder="Bijv. 2" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-espresso/50">Datum</label>
              <div className="relative">
                <Calendar className="absolute left-0 top-3 text-brand-espresso/30" size={18} />
                <input required type="date" className="w-full border-b border-brand-wood/20 py-3 pl-8 focus:border-brand-red outline-none transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-espresso/50">Tijd</label>
              <div className="relative">
                <Clock className="absolute left-0 top-3 text-brand-espresso/30" size={18} />
                <input required type="time" className="w-full border-b border-brand-wood/20 py-3 pl-8 focus:border-brand-red outline-none transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-espresso/50">Telefoonnummer</label>
              <input required type="tel" className="w-full border-b border-brand-wood/20 py-3 focus:border-brand-red outline-none transition-colors" placeholder="06 12345678" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-espresso/50">Email</label>
              <input required type="email" className="w-full border-b border-brand-wood/20 py-3 focus:border-brand-red outline-none transition-colors" placeholder="uw@email.nl" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-brand-espresso/50">Opmerkingen</label>
            <textarea rows={3} className="w-full border-b border-brand-wood/20 py-3 focus:border-brand-red outline-none transition-colors resize-none" placeholder="Allergieën of speciale wensen?"></textarea>
          </div>
          <button type="submit" className="w-full bg-brand-red text-white py-5 rounded-full text-lg uppercase tracking-widest font-bold hover:bg-brand-espresso transition-all duration-300 shadow-lg">
            Verstuur aanvraag
          </button>
        </form>
      </div>
    </div>
  );
};

const GroupsPage = () => (
  <div className="pt-32 pb-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-8xl mb-6">Groepen</h1>
        <p className="text-brand-espresso/60 uppercase tracking-widest text-sm">Arrangementen voor gezelschappen vanaf 10 personen</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" 
            alt="Group dining" 
            className="rounded-2xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-10"
        >
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-brand-red/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-red text-white px-6 py-2 text-sm font-bold uppercase tracking-widest">Populair</div>
            <h2 className="text-4xl mb-2">Misto di Carne</h2>
            <p className="text-brand-red font-bold text-2xl mb-8">€ 59,50 p.p.</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-brand-espresso/40 mb-2">Voorgerecht</h4>
                <p className="text-lg font-serif italic">Misto Terra, Mozzarella Caprese, Carpaccio & Verdure Grigliate</p>
              </div>
              <div className="w-10 h-px bg-brand-wood/10"></div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-brand-espresso/40 mb-2">Tussengerecht</h4>
                <p className="text-lg font-serif italic">Lasagne Classica</p>
              </div>
              <div className="w-10 h-px bg-brand-wood/10"></div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-brand-espresso/40 mb-2">Hoofdgerecht</h4>
                <p className="text-lg font-serif italic">Mix van gegrild vlees (Tagliata, Lamskoteletten, Sarda worst)</p>
              </div>
              <div className="w-10 h-px bg-brand-wood/10"></div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-brand-espresso/40 mb-2">Nagerecht</h4>
                <p className="text-lg font-serif italic">Duo van Tiramisu en Panna Cotta</p>
              </div>
            </div>
          </div>
          
          <p className="text-brand-espresso/60 text-center italic">
            Heeft u specifieke wensen of wilt u een arrangement op maat? Neem contact met ons op voor de mogelijkheden.
          </p>
        </motion.div>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="pt-32 pb-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-8xl mb-6">Contact</h1>
        <p className="text-brand-espresso/60 uppercase tracking-widest text-sm">Wij horen graag van u</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-sm uppercase tracking-widest font-bold mb-6 text-brand-red">Locatie</h4>
              <p className="text-xl text-brand-espresso/70 mb-4">Il Tonno Rosso</p>
              <p className="text-brand-espresso/60 leading-relaxed">
                Oude Doetinchemseweg 63<br />
                7038 BG Zeddam<br />
                Nederland
              </p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-widest font-bold mb-6 text-brand-red">Direct Contact</h4>
              <p className="text-brand-espresso/60 leading-relaxed mb-2">
                <strong>Tel:</strong> 0314 785 066
              </p>
              <p className="text-brand-espresso/60 leading-relaxed">
                <strong>Email:</strong> info@iltonnorosso.nl
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold mb-6 text-brand-red">Openingstijden</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 text-brand-espresso/70">
              <div className="flex justify-between border-b border-brand-wood/10 py-2"><span>Maandag</span> <span>17:00 – 21:00</span></div>
              <div className="flex justify-between border-b border-brand-wood/10 py-2 text-brand-red/40"><span>Dinsdag</span> <span>Gesloten</span></div>
              <div className="flex justify-between border-b border-brand-wood/10 py-2 text-brand-red/40"><span>Woensdag</span> <span>Gesloten</span></div>
              <div className="flex justify-between border-b border-brand-wood/10 py-2"><span>Donderdag</span> <span>17:00 – 21:00</span></div>
              <div className="flex justify-between border-b border-brand-wood/10 py-2"><span>Vrijdag</span> <span>17:00 – 21:00</span></div>
              <div className="flex justify-between border-b border-brand-wood/10 py-2"><span>Zaterdag</span> <span>17:00 – 21:00</span></div>
              <div className="flex justify-between border-b border-brand-wood/10 py-2"><span>Zondag</span> <span>17:00 – 21:00</span></div>
            </div>
          </div>
        </div>

        <div className="h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-brand-wood/10">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.854061555544!2d6.25594437689163!3d51.91834997191003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c799a4e4e4e4e5%3A0x400de66c11d7e60!2sOude%20Doetinchemseweg%2063%2C%207038%20BG%20Zeddam!5e0!3m2!1snl!2snl!4v1710350000000!5m2!1snl!2snl" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Home setActivePage={setActivePage} />;
      case 'about': return <AboutPage />;
      case 'menu': return <MenuPage />;
      case 'reservation': return <ReservationPage />;
      case 'groups': return <GroupsPage />;
      case 'contact': return <ContactPage />;
      default: return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
