import { Phone, Mail, MapPin } from "lucide-react";
import { services } from "@/data/services";
import logo from "@/assets/logo.png";

const Footer = (_props: Record<string, unknown>) => {
  const safetyNets = services.filter((s) => s.category === "safety" || s.category === "other");
  const birdNets = services.filter((s) => s.category === "bird");
  const sportsNets = services.filter((s) => s.category === "sports");

  return (
    <footer className="section-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo.src} alt="Safe Haven Nets" className="h-12 w-12" width={48} height={48} loading="lazy" />
              <h3 className="text-xl font-display font-bold text-secondary">Safe Haven Nets</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Trusted balcony safety net, pigeon net, and invisible grill installation experts across Hyderabad.
            </p>
            <div className="space-y-3">
              <a href="tel:+918978063844" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-secondary transition-colors">
                <Phone className="w-4 h-4 text-secondary" /> +91 8978063844
              </a>
              <a href="tel:+918877441175" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-secondary transition-colors">
                <Phone className="w-4 h-4 text-secondary" /> +91 8877441175
              </a>
              <a href="mailto:ramyanets98@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-secondary transition-colors">
                <Mail className="w-4 h-4 text-secondary" /> ramyanets98@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-secondary" /> Hyderabad, Telangana
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-4">Safety Nets</h4>
            <div className="space-y-2">
              {safetyNets.map((s) => (
                <a key={s.slug} href={`/services/${s.slug}`} className="block text-sm text-muted-foreground hover:text-secondary transition-colors">
                  {s.shortTitle}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-4">Bird Protection</h4>
            <div className="space-y-2">
              {birdNets.map((s) => (
                <a key={s.slug} href={`/services/${s.slug}`} className="block text-sm text-muted-foreground hover:text-secondary transition-colors">
                  {s.shortTitle}
                </a>
              ))}
            </div>
            <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-4 mt-8">Sports Nets</h4>
            <div className="space-y-2">
              {sportsNets.map((s) => (
                <a key={s.slug} href={`/services/${s.slug}`} className="block text-sm text-muted-foreground hover:text-secondary transition-colors">
                  {s.shortTitle}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-sm text-muted-foreground hover:text-secondary transition-colors">Home</a>
              <a href="/about" className="block text-sm text-muted-foreground hover:text-secondary transition-colors">About Us</a>
              <a href="/contact" className="block text-sm text-muted-foreground hover:text-secondary transition-colors">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Safe Haven Nets. All rights reserved. Designed by{" "}
            <a href="https://www.asksolutionsindia.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Ask Solutions India</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
