import { useState, useEffect } from "react";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
import kidsSafety from "@/assets/kids-safety.jpg";
import kidsSafety2 from "@/assets/kids-safety-2.jpg";
import invisibleGrill from "@/assets/invisible-grill.jpg";
import invisibleGrill2 from "@/assets/invisible-grill-2.jpg";
import constructionSafety from "@/assets/construction-safety.jpg";
import pigeonSafety from "@/assets/pigeon-safety.jpg";
import swimmingPool from "@/assets/swimming-pool.jpg";
import carParking from "@/assets/car-parking.jpg";
import carParking2 from "@/assets/car-parking-2.jpg";
import coconutTree2 from "@/assets/coconut-tree-2.jpg";
import cricketNets from "@/assets/cricket-nets.jpg";
import cricketNets2 from "@/assets/cricket-nets-2.jpg";
import sportsNets from "@/assets/sports-nets.jpg";
import sportsBallStop from "@/assets/sports-ball-stop.jpg";
import sportsInstallation from "@/assets/sports-installation.jpg";
import terraceCricket from "@/assets/terrace-cricket.jpg";
import terraceTop from "@/assets/terrace-top.jpg";
import buildingSafety from "@/assets/building-safety.jpg";
import ductArea from "@/assets/duct-area.jpg";
import staircaseSafety from "@/assets/staircase-safety.jpg";
import balconyHanger from "@/assets/balcony-hanger.jpg";
import coconutTree from "@/assets/coconut-tree.jpg";

const slides = [
  { image: kidsSafety.src, title: "Your Trusted Safety Net Experts", subtitle: "in Hyderabad", desc: "Protect your home, family, and property with high-quality safety nets and invisible grills." },
  { image: invisibleGrill.src, title: "Invisible Grills", subtitle: "Modern & Elegant", desc: "Strong stainless-steel wires that provide maximum safety with a sleek, modern look." },
  { image: pigeonSafety.src, title: "Pigeon & Bird Protection", subtitle: "Complete Solutions", desc: "Keep your balcony clean and hygienic with our professional bird netting systems." },
  { image: constructionSafety.src, title: "Industrial & Construction", subtitle: "Safety Nets", desc: "Heavy-duty safety solutions for construction sites, factories, and industrial areas." },
  { image: swimmingPool.src, title: "Swimming Pool Safety", subtitle: "Nets & Covers", desc: "Prevent accidental falls with our durable, removable pool safety nets." },
  { image: kidsSafety2.src, title: "Kids Safety Nets", subtitle: "Child Protection", desc: "Specially designed nets to keep your children safe on balconies and staircases." },
  { image: invisibleGrill2.src, title: "Premium Invisible Grills", subtitle: "Balcony & Windows", desc: "Rust-resistant stainless-steel grills for a clear, unobstructed view." },
  { image: carParking.src, title: "Car Parking Safety", subtitle: "Nets & Covers", desc: "Protect vehicles from falling objects with durable parking area nets." },
  { image: carParking2.src, title: "Parking Area Protection", subtitle: "Complete Coverage", desc: "Ensures safety in open parking areas for residential and commercial buildings." },
  { image: coconutTree.src, title: "Coconut Tree Safety", subtitle: "Nets & Protection", desc: "Protect people and property from falling coconuts with weather-resistant nets." },
  { image: coconutTree2.src, title: "Tree Safety Solutions", subtitle: "Reliable & Strong", desc: "Strong nets designed to handle heavy coconuts and tropical weather." },
  { image: cricketNets.src, title: "Cricket Practice Nets", subtitle: "Sports Training", desc: "High-quality nets for cricket practice and professional sports training." },
  { image: cricketNets2.src, title: "Professional Sports Nets", subtitle: "Durable & Strong", desc: "Long-lasting performance nets for all your sports training needs." },
  { image: sportsNets.src, title: "All Sports Nets", subtitle: "Multi-Sport Solutions", desc: "Complete range of sports nets for football, cricket, and more." },
  { image: sportsBallStop.src, title: "Ball Stop Netting", subtitle: "Sports Facilities", desc: "Prevent balls from leaving the playing area with our ball stop nets." },
  { image: sportsInstallation.src, title: "Sports Net Installation", subtitle: "Professional Setup", desc: "Expert installation of sports nets for grounds, academies, and stadiums." },
  { image: terraceCricket.src, title: "Terrace Cricket Nets", subtitle: "Rooftop Sports", desc: "Play cricket on your terrace with professional-grade safety nets." },
  { image: terraceTop.src, title: "Terrace Top Nets", subtitle: "Open Area Coverage", desc: "Cover open terrace areas for safety, bird protection, and shade." },
  { image: buildingSafety.src, title: "Building Safety Nets", subtitle: "High-Rise Protection", desc: "Essential safety nets for high-rise buildings and apartments." },
  { image: ductArea.src, title: "Duct Area Safety Nets", subtitle: "Gap Coverage", desc: "Cover open duct spaces to prevent accidents and bird entry." },
  { image: staircaseSafety.src, title: "Staircase Safety Nets", subtitle: "Fall Prevention", desc: "Prevent accidents in open staircases for homes and commercial buildings." },
  { image: balconyHanger.src, title: "Balcony Hangers", subtitle: "Ceiling Mounted", desc: "Premium ceiling-mounted hangers for drying clothes efficiently on your balcony." },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(p => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent(p => (p + 1) % slides.length);

  return (
    <section className="relative h-[100vh] min-h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-primary-foreground">
            <div className={`transition-all duration-700 ${current >= 0 ? "animate-fade-in-up" : ""}`} key={current}>
              <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                ✅ Free Site Visit • Same-Day Installation
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-2">
                {slides[current].title}
              </h1>
              <p className="text-2xl md:text-3xl font-display text-secondary mb-6">{slides[current].subtitle}</p>
              <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">{slides[current].desc}</p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+918978063844" className="flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity animate-pulse-glow">
                  <Phone className="w-5 h-5" /> Call for Free Quote
                </a>
                <a href="https://wa.me/918877441175" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-primary-foreground/50 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nav arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 flex-wrap justify-center max-w-md">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-secondary w-6" : "bg-primary-foreground/50"}`} />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
