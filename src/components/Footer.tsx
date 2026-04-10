import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { services } from "@/data/services";
import logo from "@/assets/logo.png";

const Footer = () => {
  const safetyNets = services.filter(s => s.category === "safety" || s.category === "other");
  const birdNets = services.filter(s => s.category === "bird");
  const sportsNets = services.filter(s => s.category === "sports");

  return (
    <footer className="section-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Ramya Nets & Invisible Grills" className="h-12 w-12" width={48} height={48} loading="lazy" />
              <h3 className="text-xl font-display font-bold text-secondary">Ramya Nets & Invisible Grills</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Your trusted safety net experts in Hyderabad. Professional installation, premium materials, and unbeatable prices.
            </p>
            <div className="space-y-3">
              <a href="tel:+918978063844" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-secondary transition-colors">
                <Phone className="w-4 h-4 text-secondary" /> +91 8978063844
              </a>
              <a href="tel:+917416941175" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-secondary transition-colors">
                <Phone className="w-4 h-4 text-secondary" /> +91 7416941175
              </a>
              <a href="mailto:ramyanets98@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-secondary transition-colors">
                <Mail className="w-4 h-4 text-secondary" /> ramyanets98@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-secondary" /> Hyderabad
              </div>
            </div>
          </div>

          {/* Safety Nets */}
          <div>
            <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-4">Safety Nets</h4>
            <div className="space-y-2">
              {safetyNets.map(s => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="block text-sm text-muted-foreground hover:text-secondary transition-colors">
                  {s.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          {/* Bird Protection */}
          <div>
            <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-4">Bird Protection</h4>
            <div className="space-y-2">
              {birdNets.map(s => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="block text-sm text-muted-foreground hover:text-secondary transition-colors">
                  {s.shortTitle}
                </Link>
              ))}
            </div>
            <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-4 mt-8">Sports Nets</h4>
            <div className="space-y-2">
              {sportsNets.map(s => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="block text-sm text-muted-foreground hover:text-secondary transition-colors">
                  {s.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-secondary transition-colors">Home</Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-secondary transition-colors">About Us</Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-secondary transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ramya Nets and Invisible Grills. All rights reserved. Designed by{" "}
            <a href="https://www.asksolutionsindia.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Ask Solutions India</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
