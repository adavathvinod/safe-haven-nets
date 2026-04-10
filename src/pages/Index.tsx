import { Link } from "react-router-dom";
import { Phone, Shield, Clock, Award, Users, CheckCircle, Star, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider";
import ServiceCard from "@/components/ServiceCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { services } from "@/data/services";
import WorkGallery from "@/components/WorkGallery";
import constructionSafety from "@/assets/construction-safety.jpg";
import invisibleGrill from "@/assets/invisible-grill.jpg";

const AnimatedSection = ({ children, className = "", animation = "animate-fade-in-up" }: { children: React.ReactNode; className?: string; animation?: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`${className} ${isVisible ? animation : "opacity-0"}`}>
      {children}
    </div>
  );
};

const features = [
  { icon: Shield, title: "Free Site Inspection", desc: "We visit your location, assess requirements, and provide a detailed quote — completely free." },
  { icon: Award, title: "Premium Materials", desc: "UV-resistant, weatherproof HDPE and nylon nets with 5-10 year warranty." },
  { icon: Clock, title: "Same-Day Service", desc: "Urgent installation? We offer same-day service across Hyderabad." },
  { icon: Users, title: "Expert Technicians", desc: "Clean, damage-free installation by trained and experienced professionals." },
];

const faqs = [
  { q: "Do you provide free installation?", a: "Yes, we provide free installation for all services across Hyderabad." },
  { q: "How long does installation take?", a: "Usually completed within a few hours depending on area size and complexity." },
  { q: "Do you offer same-day service?", a: "Yes, based on availability. Call us for urgent installations." },
  { q: "Are nets safe for children and pets?", a: "Absolutely. We use high-quality, non-toxic materials certified for child and pet safety." },
  { q: "Can nets be removed later?", a: "Yes, they can be easily removed without any damage to your property." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <HeroSlider />

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">The Ramya Nets Difference</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">We combine quality materials, expert installation, and unbeatable pricing to deliver safety solutions you can trust.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <AnimatedSection key={i} className="text-center p-8 rounded-2xl bg-card shadow-lg hover:shadow-xl transition-shadow" animation="animate-scale-in">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <f.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Parallax */}
      <section className="parallax-section relative py-28" style={{ backgroundImage: `url(${invisibleGrill})` }}>
        <div className="absolute inset-0 bg-foreground/80" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">About Us</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mt-3 mb-6">Who We Are</h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Ramya Nets and Invisible Grills is a leading safety solutions provider in Hyderabad. We specialize in installing balcony safety nets, bird protection systems, invisible grills, and industrial safety nets. With experienced professionals and premium materials, we ensure long-lasting protection for homes, apartments, offices, and commercial buildings.
            </p>
            <p className="text-xl font-display text-secondary italic">
              "Make every space safe, secure, and stress-free."
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">Comprehensive Safety Solutions</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.slug} animation="animate-fade-in-up">
                <ServiceCard service={s} index={i} />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-12">
            <Link to="/services/balcony-safety-nets" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Parallax */}
      <section className="parallax-section relative py-28" style={{ backgroundImage: `url(${constructionSafety})` }}>
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Call For Free Inspection & Instant Quote</h2>
            <p className="text-xl text-primary-foreground/80 mb-8">Looking for urgent installation? We're just a call away.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+918978063844" className="flex items-center gap-2 bg-secondary text-secondary-foreground px-10 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-opacity animate-pulse-glow">
                <Phone className="w-5 h-5" /> +91 8978063844
              </a>
              <a href="https://wa.me/918978063844" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-primary-foreground/50 text-primary-foreground px-10 py-4 rounded-full text-lg font-bold hover:bg-primary-foreground/10 transition-colors">
                💬 WhatsApp Us
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-10 text-primary-foreground/80">
              <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-secondary" /> Fast Response</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-secondary" /> Same-Day Service</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-secondary" /> Best Pricing</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-secondary fill-secondary" />)}
            </div>
            <blockquote className="text-2xl md:text-3xl font-display text-foreground italic leading-relaxed mb-8">
              "Excellent service! Installed balcony safety nets for our kids. Very professional and affordable. Highly recommended."
            </blockquote>
            <p className="text-muted-foreground font-semibold">— Happy Customer, Hyderabad</p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">FAQs</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">Frequently Asked Questions</h2>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} className="bg-card rounded-2xl p-6 shadow-md">
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      {/* Work Gallery */}
      <WorkGallery />
    </Layout>
  );
};

export default Index;
