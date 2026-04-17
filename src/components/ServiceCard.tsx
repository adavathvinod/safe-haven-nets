import { ArrowRight, Phone } from "lucide-react";
import type { Service } from "@/data/services";

const ServiceCard = ({ service, index }: { service: Service; index: number }) => (
  <div
    className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <a href={`/services/${service.slug}`} className="block">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      </div>
      <div className="absolute bottom-16 left-0 right-0 p-6">
        <span className="text-2xl mb-2 block">{service.icon}</span>
        <h3 className="text-lg font-display font-bold text-primary-foreground mb-1">{service.title}</h3>
        <p className="text-sm text-primary-foreground/70 line-clamp-2 mb-3">{service.description}</p>
        <span className="inline-flex items-center gap-1 text-secondary text-sm font-semibold group-hover:gap-2 transition-all">
          Learn More <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </a>
    <div className="absolute bottom-0 left-0 right-0 p-4 pt-0">
      <a
        href="tel:+918978063844"
        className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground w-full py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity"
      >
        <Phone className="w-4 h-4" /> Call Now
      </a>
    </div>
  </div>
);

export default ServiceCard;
