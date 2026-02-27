import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#resume" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();
  const navY = useTransform(scrollY, [0, 100], [0, -5]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // active section detection
      const sections = navItems.map(n => n.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      style={{ y: navY }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-glass py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-16 lg:h-20 px-4 sm:px-6 lg:px-8">
        <motion.button 
          onClick={() => scrollTo("#home")} 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-heading font-bold text-xl tracking-wider text-gradient-gold"
        >
          PRADEEP
        </motion.button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              whileHover={{ y: -2 }}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === item.href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </motion.button>
          ))}
          <motion.a
            href="/Pradeep_Kumar_Tekmal_02.pdf"
            download="Pradeep_Kumar_Tekmal_02.pdf"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-gold text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all glow-gold-sm"
          >
            <Download className="w-4 h-4" />
            Resume
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-foreground">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-glass border-t border-border"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`block w-full text-left text-sm font-medium py-2 ${
                  activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
            <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-gold text-primary-foreground font-semibold text-sm">
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
