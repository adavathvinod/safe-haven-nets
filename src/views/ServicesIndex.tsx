import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const ServicesIndex = (_props: Record<string, unknown>) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Our Services</span>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
                Safety Nets and Invisible Grills in Hyderabad
              </h1>
              <p className="text-muted-foreground mt-4">
                Choose from premium balcony safety nets, bird protection, sports nets and custom safety solutions for homes and commercial spaces.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={service.slug} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesIndex;
