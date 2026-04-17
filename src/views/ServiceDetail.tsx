import { Phone, CheckCircle, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getServiceBySlug, services } from "@/data/services";

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  return <div ref={ref} className={`${className} ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>{children}</div>;
};

interface ServiceDetailProps {
  slug?: string;
  [key: string]: unknown;
}

const ServiceDetail = ({ slug = "" }: ServiceDetailProps) => {
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold text-foreground mb-4">Service Not Found</h1>
            <a href="/" className="text-secondary font-semibold hover:underline">Go Home</a>
          </div>
        </div>
      </Layout>
    );
  }

  const relatedServices = services.filter((s) => s.slug !== service.slug && s.category === service.category).slice(0, 4);

  return (
    <Layout>
      <section className="parallax-section relative py-32 md:py-44" style={{ backgroundImage: `url(${service.image})` }}>
        <div className="absolute inset-0 bg-foreground/75" />
        <div className="container mx-auto px-4 relative z-10">
          <a href="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </a>
          <span className="text-5xl block mb-4">{service.icon}</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-4">{service.title}</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">{service.description}</p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-3xl font-display font-bold text-foreground mb-8">What We Offer</h2>
                <div className="space-y-4 mb-12">
                  {service.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{detail}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Key Benefits</h3>
                <div className="flex flex-wrap gap-3">
                  {service.benefits.map((b, i) => (
                    <span key={i} className="bg-secondary/10 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium border border-secondary/20">
                      ✓ {b}
                    </span>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection className="mt-12">
                <img src={service.image} alt={service.title} className="w-full rounded-2xl shadow-xl" />
              </AnimatedSection>
            </div>

            <div>
              <div className="sticky top-28 space-y-6">
                <div className="bg-primary text-primary-foreground rounded-2xl p-8">
                  <h3 className="text-xl font-display font-bold mb-4">Get a Free Quote</h3>
                  <p className="text-sm opacity-80 mb-6">Call us for a free site inspection and instant quote for {service.title.toLowerCase()}.</p>
                  <a href="tel:+918978063844" className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground w-full py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
                    <Phone className="w-5 h-5" /> +91 8978063844
                  </a>
                  <a href="tel:+918877441175" className="flex items-center justify-center gap-2 bg-secondary/80 text-secondary-foreground w-full py-4 rounded-xl font-bold mt-3 hover:opacity-90 transition-opacity">
                    <Phone className="w-5 h-5" /> +91 8877441175
                  </a>
                  <a href="https://wa.me/918877441175" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground w-full py-4 rounded-xl font-bold mt-3 hover:bg-primary-foreground/10 transition-colors">
                    💬 WhatsApp Us
                  </a>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-lg">
                  <h4 className="text-lg font-display font-bold text-foreground mb-4">All Services</h4>
                  <div className="space-y-2 max-h-80 overflow-y-auto">
                    {services.map((s) => (
                      <a
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className={`flex items-center gap-2 text-sm py-2 px-3 rounded-lg transition-colors ${s.slug === slug ? "bg-secondary/10 text-secondary font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}
                      >
                        <span>{s.icon}</span> {s.shortTitle}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground">Related Services</h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((s, i) => (
                <ServiceCard key={s.slug} service={s} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-dark py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">Ready to Get Started?</h2>
          <a href="tel:+918978063844" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-10 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-opacity animate-pulse-glow">
            <Phone className="w-5 h-5" /> Call Now: +91 8978063844
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
