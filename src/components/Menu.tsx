import React, { useState, useEffect } from 'react';
import { menuData } from '../data/menuData';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronRight } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(menuData[0].id);
  const [activeSubTab, setActiveSubTab] = useState<number>(0);

  const activeSection = menuData.find(section => section.id === activeTab);
  const activeCategory = activeSection?.categories[activeSubTab];

  useEffect(() => {
    setActiveSubTab(0);
  }, [activeTab]);

  return (
    <section id="menu" className="py-32 bg-[#fdfcfb] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[#c41e3a] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">
            Sardijnse Gastronomie
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-8xl font-serif mb-6 text-stone-900 italic">
            Il Nostro Menù
          </motion.h2>
        </div>

        {/* Main Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuData.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
                activeTab === section.id ? 'bg-[#c41e3a] text-white shadow-xl scale-105' : 'bg-white text-stone-400 hover:text-stone-900 border border-stone-100'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Sub Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {activeSection?.categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSubTab(idx)}
              className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeSubTab === idx ? 'bg-stone-900 text-white shadow-md' : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
              }`}
            >
              {category.title}
              {activeSubTab === idx && <ChevronRight className="w-4 h-4" />}
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${activeSubTab}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-12 md:p-24 rounded-[4rem] shadow-2xl border border-stone-50 relative overflow-hidden"
            >
              <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none">
                <Star className="w-80 h-80 text-[#c41e3a]" />
              </div>
              
              <h3 className="text-5xl font-serif text-stone-900 mb-16 italic border-b border-stone-100 pb-8">
                {activeCategory?.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
                {activeCategory?.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group">
                    <div className="flex justify-between items-baseline mb-3">
                      <h4 className="text-xl font-bold text-stone-900 group-hover:text-[#c41e3a] transition-colors duration-300 flex items-center gap-2">
                        {item.isSpecial && <Star className="w-4 h-4 fill-[#c41e3a] text-[#c41e3a]" />}
                        {item.name}
                      </h4>
                      <span className="text-[#c41e3a] font-black text-lg ml-4">
                        {item.price}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-stone-500 text-lg leading-relaxed mb-4 italic font-light">
                        {item.description}
                      </p>
                    )}
                    <div className="flex gap-3">
                      {item.dietary?.map((type) => (
                        <span
                          key={type}
                          className={`text-[10px] uppercase tracking-[0.2em] font-black px-3 py-1 rounded-md ${
                            type === 'vegan' ? 'bg-emerald-50 text-emerald-700' :
                            type === 'veg' ? 'bg-green-50 text-green-700' :
                            type === 'spicy' ? 'bg-red-50 text-red-700' :
                            'bg-stone-100 text-stone-600'
                          }`}
                        >
                          {type === 'vegan' ? 'Vegan' : type === 'veg' ? 'Vegetarisch' : type === 'spicy' ? 'Pikant' : type}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Menu;
