@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
}

@layer base {
  body {
    @apply bg-[#fdfcfb] text-stone-900 antialiased selection:bg-[#c41e3a]/20;
  }
}

/* Custom Colors & Utilities */
.text-italian-red {
  color: #c41e3a;
}

.bg-italian-red {
  background-color: #c41e3a;
}

.border-italian-red {
  border-color: #c41e3a;
}

/* Navbar Scroll Animation */
.nav-transparent {
  @apply bg-transparent border-transparent py-6;
}

.nav-scrolled {
  @apply bg-white/95 backdrop-blur-md border-stone-200 py-4 shadow-sm;
}

/* Menu Card & Hover Effects */
.menu-item-hover {
  @apply transition-all duration-500 hover:translate-x-2;
}

.active-tab-indicator {
  @apply absolute -bottom-1 left-0 w-full h-0.5 bg-[#c41e3a] origin-left;
}

/* Custom Animations */
@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-slide-up {
  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 1.2s ease-out forwards;
}

/* Decorative Elements */
.italian-pattern {
  background-image: radial-gradient(#c41e3a 0.5px, transparent 0.5px);
  background-size: 20px 20px;
  opacity: 0.05;
}
