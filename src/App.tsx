import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import { motion, useScroll, useTransform } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ChevronDown, Star, Quote } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const navBackground = useTransform(scrollY, [0, 100], ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.98)']);
  const navText = useTransform(scrollY, [0, 100], ['rgba(255, 255, 255, 1)', 'rgba(28, 25, 23, 1)']);
  const navLogo = useTransform(scrollY, [0, 100], ['rgba(255, 255, 255, 1)', 'rgba(196, 30, 58, 1)']);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-[#fdfcfb]">
      {/* Navigation */}
      <motion.nav 
        style={{ backgroundColor: navBackground }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 shadow-md border-b border-stone-200' : 'py-8 border-transparent'}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.a href="#" style={{ color: navLogo }} className="text-3xl font-serif font-bold tracking-tighter">
            Il Tonno Rosso
          </motion.a>
          
          <div className="hidden md:flex gap-10 text-[12px] font-bold uppercase tracking-[0.2em]">
            {['Wie zijn wij', 'Menu', 'Groepen', 'Reserveren', 'Contact'].map((item) => (
              <motion.a key={item} href={`#${item.toLowerCase().replace(/\s/g, '')}`} style={{ color: navText }} className="hover:opacity-60 transition-opacity">
                {item}
              </motion.a>
            ))}
          </div>

          <a href="#reserveren" className={`px-8 py-3 rounded-full text-[12px] font-bold uppercase tracking-widest transition-all duration-500 ${isScrolled ? 'bg-[#c41e3a] text-white' : 'bg-white text-stone-900 shadow-xl'}`}>
            Reserveer
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=1920" 
            alt="Sardinia Landscape"
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#c41e3a] text-[#c41e3a]" />)}
            </div>
            <h1 className="text-8xl md:text-[13rem] font-serif mb-4 leading-none tracking-tighter italic">Benvenuti</h1>
            <p className="text-xl md:text-3xl font-light tracking-[0.4em] uppercase mb-12 opacity-90">Sardinië in de Achterhoek</p>
            <div className="flex justify-center">
              <a href="#menu" className="bg-[#c41e3a] text-white px-16 py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#a01830] transition-all shadow-2xl hover:scale-105 active:scale-95">
                Ontdek de Kaart
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white opacity-50">
          <ChevronDown className="w-10 h-10" />
        </motion.div>
      </section>

      {/* About Us Section */}
      <section id="wiezijnwij" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
              <img 
                src="https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?auto=format&fit=crop&q=80&w=800" 
                alt="Sardinian Coast"
                className="rounded-[3rem] shadow-2xl w-full h-[650px] object-cover"
              />
              <div className="absolute -bottom-10 -right-10 bg-[#c41e3a] p-10 rounded-[2rem] shadow-2xl text-white max-w-[320px]">
                <Quote className="w-10 h-10 mb-4 opacity-50" />
                <p className="text-xl font-serif italic leading-relaxed">"De echte smaken van Sardinië in de Achterhoek."</p>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
              <span className="text-[#c41e3a] font-bold text-xs uppercase tracking-[0.4em]">Wie zijn wij?</span>
              <h2 className="text-6xl font-serif text-stone-900 italic">Daniela & Denis</h2>
              <div className="space-y-6 text-stone-600 leading-relaxed text-xl font-light">
                <p>
                  Il Tonno Rosso is 10 jaar geleden gestart door Daniela en Denis, wij verhuisde van Sardinië naar Nederland voor een nieuw avontuur. We wilden de heerlijke tradities en smaken van Sardinië meenemen naar Nederland.
                </p>
                <p>
                  Bij Il Tonno Rosso draait alles om verse producten en traditionele (Sardijnse) Italiaanse recepten.
                </p>
                <p>
                  Door zo min mogelijk compromissen te sluiten en zoveel mogelijk producten uit Sardinië te importeren, brengen Daniela en Denis de echte smaken van Sardinië naar de Achterhoek.
                </p>
                <p className="font-serif italic text-stone-900 text-2xl pt-4">
                  Hier bij Il Tonno Rosso beleef je het echte Italië. Of je nu zin hebt in een lekkere pizza, pasta of authentieke Italiaanse vlees- en visgerechten, je bent hier aan het juiste adres!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Component */}
      <Menu />

      {/* Groups Section */}
      <section id="groepen" className="py-32 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[4rem] overflow-hidden shadow-2xl border border-stone-100">
            <div className="h-[500px] lg:h-auto overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&q=80&w=800" 
                alt="Sardinian Food"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="p-12 lg:p-24 flex flex-col justify-center relative">
              <span className="inline-block px-6 py-2 bg-[#c41e3a] text-white text-[11px] font-bold uppercase tracking-[0.3em] rounded-full mb-10 w-fit shadow-lg">
                Vanaf 10 personen
              </span>
              <h2 className="text-6xl font-serif mb-12 text-stone-900 italic">Groepsarrangementen</h2>
              <div className="border-l-4 border-[#c41e3a] pl-10 space-y-6">
                <h3 className="text-3xl font-serif text-stone-800 italic">Misto di Carne</h3>
                <p className="text-[#c41e3a] font-black text-5xl">€ 59,50 p.p.</p>
                <ul className="space-y-4 text-stone-600 font-medium text-xl">
                  {['Voorgerecht: Misto Terra & Carpaccio', 'Tussengerecht: Lasagne Classica', 'Hoofdgerecht: Mix van gegrild vlees', 'Nagerecht: Tiramisu & Panna Cotta'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-[#c41e3a]" /> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reserveren" className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-7xl font-serif mb-6 italic">Prenotare</h2>
            <p className="text-stone-400 uppercase tracking-[0.4em] text-xs font-bold">Reserveer uw tafel voor een onvergetelijke avond</p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-stone-50 p-12 md:p-20 rounded-[4rem] border border-stone-100">
            {['Naam', 'Personen', 'Datum', 'Tijd', 'Telefoon', 'Email'].map((label) => (
              <div key={label} className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-stone-400 ml-6">{label}</label>
                <input type={label === 'Datum' ? 'date' : label === 'Tijd' ? 'time' : label === 'Personen' ? 'number' : 'text'} className="w-full p-6 bg-white border-none rounded-3xl focus:ring-2 focus:ring-[#c41e3a] transition-all shadow-sm" required />
              </div>
            ))}
            <div className="md:col-span-2 space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-widest text-stone-400 ml-6">Opmerkingen</label>
              <textarea rows={4} className="w-full p-6 bg-white border-none rounded-3xl focus:ring-2 focus:ring-[#c41e3a] transition-all shadow-sm"></textarea>
            </div>
            <button type="submit" className="md:col-span-2 bg-[#c41e3a] text-white py-8 rounded-3xl font-bold text-sm uppercase tracking-[0.4em] hover:bg-[#a01830] transition-all shadow-2xl hover:scale-[1.02] active:scale-98">
              Verstuur Aanvraag
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-stone-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-16">
              <h2 className="text-7xl font-serif italic">Contatti</h2>
              {[
                { icon: MapPin, title: 'Adres', content: 'Oude Doetinchemseweg 63, 7038 BG Zeddam' },
                { icon: Phone, title: 'Telefoon', content: '0314 785 066' },
                { icon: Mail, title: 'Email', content: 'info@iltonnorosso.nl' },
                { icon: Clock, title: 'Openingstijden', content: 'Do - Ma: 17:00 – 21:00', sub: 'Dinsdag & Woensdag: Gesloten' }
              ].map((item, i) => (
                <div key={i} className="flex gap-10 group">
                  <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-[#c41e3a] transition-all duration-500">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3 text-[#c41e3a]">{item.title}</h4>
                    <p className="text-2xl font-light text-stone-200">{item.content}</p>
                    {item.sub && <p className="text-stone-500 text-sm mt-2 tracking-widest uppercase">{item.sub}</p>}
                  </div>
                </div>
              ))}
            </div>
            <div className="h-[700px] rounded-[4rem] overflow-hidden grayscale contrast-125 opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 shadow-2xl">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.854061555544!2d6.25594437689163!3d51.91834997191003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c799a4e4e4e4e5%3A0x400de66c11d7e60!2sOude%20Doetinchemseweg%2063%2C%207038%20BG%20Zeddam!5e0!3m2!1snl!2snl!4v1710350000000!5m2!1snl!2snl" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-stone-950 text-stone-600 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-serif text-white mb-4 italic">Il Tonno Rosso</h3>
            <p className="text-xs tracking-[0.4em] uppercase font-bold">Authentiek Sardinië in Zeddam</p>
          </div>
          <div className="flex gap-12">
            <a href="https://facebook.com" className="hover:text-[#c41e3a] transition-all"><Facebook className="w-8 h-8" /></a>
            <a href="https://instagram.com" className="hover:text-[#c41e3a] transition-all"><Instagram className="w-8 h-8" /></a>
          </div>
          <div className="text-center md:text-right text-[11px] font-bold uppercase tracking-[0.4em] text-stone-400">
            &copy; 2026 Il Tonno Rosso
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
