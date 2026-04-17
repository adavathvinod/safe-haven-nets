import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import constructionSafety from "@/assets/construction-safety.jpg";

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  return <div ref={ref} className={`${className} ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>{children}</div>;
};

const Contact = (_props: Record<string, unknown>) => (
  <Layout>
    <section className="parallax-section relative py-32 md:py-44" style={{ backgroundImage: `url(${constructionSafety.src})` }}>
      <div className="absolute inset-0 bg-foreground/80" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-4">Contact Us</h1>
        <p className="text-xl text-primary-foreground/80">Get in touch for a free inspection and instant quote.</p>
      </div>
    </section>

    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">Get In Touch</h2>
            <div className="space-y-6">
              <a href="tel:+918978063844" className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-md hover:shadow-lg transition-shadow">
                <Phone className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <p className="font-bold text-foreground">Phone 1</p>
                  <p className="text-muted-foreground">+91 8978063844</p>
                </div>
              </a>
              <a href="tel:+918877441175" className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-md hover:shadow-lg transition-shadow">
                <Phone className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <p className="font-bold text-foreground">Phone 2 (WhatsApp)</p>
                  <p className="text-muted-foreground">+91 8877441175</p>
                </div>
              </a>
              <a href="mailto:ramyanets98@gmail.com" className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-md hover:shadow-lg transition-shadow">
                <Mail className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <p className="font-bold text-foreground">Email</p>
                  <p className="text-muted-foreground">ramyanets98@gmail.com</p>
                </div>
              </a>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-md">
                <MapPin className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <p className="font-bold text-foreground">Location</p>
                  <p className="text-muted-foreground">Hyderabad, Telangana</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-md">
                <Clock className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <p className="font-bold text-foreground">Working Hours</p>
                  <p className="text-muted-foreground">Mon - Sun: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
            <a href="https://wa.me/918877441175" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity">
              💬 WhatsApp Us Now
            </a>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">Send a Message</h2>
            <form className="space-y-5" onSubmit={e => { e.preventDefault(); alert("Thank you! We'll contact you shortly."); }}>
              <input type="text" placeholder="Your Name" required className="w-full px-5 py-4 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-secondary focus:outline-none" />
              <input type="tel" placeholder="Phone Number" required className="w-full px-5 py-4 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-secondary focus:outline-none" />
              <input type="email" placeholder="Email (Optional)" className="w-full px-5 py-4 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-secondary focus:outline-none" />
              <select className="w-full px-5 py-4 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-secondary focus:outline-none">
                <option value="">Select Service</option>
                <option>Balcony Safety Nets</option>
                <option>Pigeon Safety Nets</option>
                <option>Invisible Grills</option>
                <option>Children Safety Nets</option>
                <option>Construction Safety Nets</option>
                <option>Other</option>
              </select>
              <textarea rows={4} placeholder="Your Message" className="w-full px-5 py-4 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-secondary focus:outline-none resize-none" />
              <button type="submit" className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
