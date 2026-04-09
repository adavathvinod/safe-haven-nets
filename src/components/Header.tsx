import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const safetyNets = services.filter(s => s.category === "safety" || s.category === "other");
  const birdNets = services.filter(s => s.category === "bird");
  const sportsNets = services.filter(s => s.category === "sports");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Ramya Nets & Invisible Grills" className="h-12 w-12" width={48} height={48} />
            <div className="flex flex-col">
              <span className="text-lg font-display font-bold text-primary leading-tight">Ramya Nets</span>
              <span className="text-[10px] text-muted-foreground tracking-wider">& Invisible Grills</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">Home</Link>
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">About</Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-secondary transition-colors">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="glass rounded-xl shadow-2xl p-6 w-[700px] grid grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto">
                  <div>
                    <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">Safety Nets</h4>
                    {safetyNets.map(s => (
                      <Link key={s.slug} to={`/services/${s.slug}`} className="block text-sm py-1.5 text-muted-foreground hover:text-primary transition-colors">
                        {s.icon} {s.shortTitle}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">Bird Protection</h4>
                    {birdNets.map(s => (
                      <Link key={s.slug} to={`/services/${s.slug}`} className="block text-sm py-1.5 text-muted-foreground hover:text-primary transition-colors">
                        {s.icon} {s.shortTitle}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">Sports Nets</h4>
                    {sportsNets.map(s => (
                      <Link key={s.slug} to={`/services/${s.slug}`} className="block text-sm py-1.5 text-muted-foreground hover:text-primary transition-colors">
                        {s.icon} {s.shortTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link to="/contact" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">Contact</Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919900220020" className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-foreground">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <Link to="/" onClick={() => setMobileOpen(false)} className="block text-sm font-medium py-2">Home</Link>
            <Link to="/about" onClick={() => setMobileOpen(false)} className="block text-sm font-medium py-2">About</Link>
            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center gap-1 text-sm font-medium py-2 w-full">
              Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-2 max-h-60 overflow-y-auto">
                {services.map(s => (
                  <Link key={s.slug} to={`/services/${s.slug}`} onClick={() => setMobileOpen(false)} className="block text-sm py-1 text-muted-foreground">
                    {s.icon} {s.shortTitle}
                  </Link>
                ))}
              </div>
            )}
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="block text-sm font-medium py-2">Contact</Link>
            <a href="tel:+919900220020" className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-5 py-3 rounded-full text-sm font-semibold">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
