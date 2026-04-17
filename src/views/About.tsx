import { Shield, Award, Clock, Users, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import constructionSafety from "@/assets/construction-safety.jpg";
import invisibleGrill from "@/assets/invisible-grill.jpg";

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  return <div ref={ref} className={`${className} ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>{children}</div>;
};

const About = (_props: Record<string, unknown>) => (
  <Layout>
    {/* Hero */}
    <section className="parallax-section relative py-32 md:py-44" style={{ backgroundImage: `url(${invisibleGrill.src})` }}>
      <div className="absolute inset-0 bg-foreground/80" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-4">About Safe Haven Nets</h1>
        <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">Hyderabad's trusted team for balcony safety nets, pigeon nets and invisible grills.</p>
      </div>
    </section>

    {/* Story */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Safe Haven Nets is a leading safety solutions provider in Hyderabad. We specialize in balcony safety nets, bird protection systems, invisible grills, and industrial safety nets.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With experienced professionals and premium HDPE and nylon materials, we ensure long-lasting protection for homes, apartments, offices, and commercial buildings.
            </p>
            <p className="text-xl font-display text-secondary italic">"Make every space safe, secure, and stress-free."</p>
          </AnimatedSection>
          <AnimatedSection className="rounded-2xl overflow-hidden shadow-2xl">
            <img src={constructionSafety.src} alt="Our team at work" className="w-full h-[400px] object-cover" />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Why Choose Safe Haven Nets?</h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { icon: CheckCircle, text: "Free Site Inspection" },
            { icon: Award, text: "High-Quality Materials (UV Resistant & Weatherproof)" },
            { icon: Shield, text: "Affordable Pricing" },
            { icon: Clock, text: "Same-Day Service Available" },
            { icon: Users, text: "Clean & Damage-Free Installation" },
            { icon: Award, text: "Experienced Technicians" },
          ].map((item, i) => (
            <AnimatedSection key={i} className="flex items-center gap-4 bg-card p-6 rounded-xl shadow-md">
              <item.icon className="w-8 h-8 text-secondary flex-shrink-0" />
              <span className="font-medium text-foreground">{item.text}</span>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
