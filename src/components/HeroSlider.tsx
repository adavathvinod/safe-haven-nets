import { useState, useEffect } from "react";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
import kidsSafety from "@/assets/kids-safety.jpg";
import invisibleGrill from "@/assets/invisible-grill.jpg";
import constructionSafety from "@/assets/construction-safety.jpg";
import pigeonSafety from "@/assets/pigeon-safety.jpg";
import swimmingPool from "@/assets/swimming-pool.jpg";

const slides = [
  { image: kidsSafety, title: "Your Trusted Safety Net Experts", subtitle: "in Hyderabad", desc: "Protect your home, family, and property with high-quality safety nets and invisible grills." },
  { image: invisibleGrill, title: "Invisible Grills", subtitle: "Modern & Elegant", desc: "Strong stainless-steel wires that provide maximum safety with a sleek, modern look." },
  { image: pigeonSafety, title: "Pigeon & Bird Protection", subtitle: "Complete Solutions", desc: "Keep your balcony clean and hygienic with our professional bird netting systems." },
  { image: constructionSafety, title: "Industrial & Construction", subtitle: "Safety Nets", desc: "Heavy-duty safety solutions for construction sites, factories, and industrial areas." },
  { image: swimmingPool, title: "Swimming Pool Safety", subtitle: "Nets & Covers", desc: "Prevent accidental falls with our durable, removable pool safety nets." },
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
                <a href="tel:+919900220020" className="flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity animate-pulse-glow">
                  <Phone className="w-5 h-5" /> Call for Free Quote
                </a>
                <a href="https://wa.me/919900220020" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-primary-foreground/50 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-secondary w-8" : "bg-primary-foreground/50"}`} />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
