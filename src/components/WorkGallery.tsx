import { useRef, useEffect } from "react";
import pigeonSafety from "@/assets/pigeon-safety.jpg";
import cricketNets from "@/assets/cricket-nets.jpg";
import cricketNets2 from "@/assets/cricket-nets-2.jpg";
import invisibleGrill from "@/assets/invisible-grill.jpg";
import invisibleGrill2 from "@/assets/invisible-grill-2.jpg";
import sportsNets from "@/assets/sports-nets.jpg";
import swimmingPool from "@/assets/swimming-pool.jpg";
import carParking from "@/assets/car-parking.jpg";
import carParking2 from "@/assets/car-parking-2.jpg";
import coconutTree2 from "@/assets/coconut-tree-2.jpg";
import kidsSafety from "@/assets/kids-safety.jpg";
import kidsSafety2 from "@/assets/kids-safety-2.jpg";
import constructionSafety from "@/assets/construction-safety.jpg";
import buildingSafety from "@/assets/building-safety.jpg";
import ductArea from "@/assets/duct-area.jpg";
import staircaseSafety from "@/assets/staircase-safety.jpg";
import sportsBallStop from "@/assets/sports-ball-stop.jpg";
import terraceCricket from "@/assets/terrace-cricket.jpg";
import terraceTop from "@/assets/terrace-top.jpg";
import balconyHanger from "@/assets/balcony-hanger.jpg";
import sportsInstallation from "@/assets/sports-installation.jpg";

const galleryImages = [
  { src: kidsSafety2.src, label: "Balcony Safety Nets" },
  { src: kidsSafety.src, label: "Children Safety Nets" },
  { src: invisibleGrill.src, label: "Pets Safety Nets" },
  { src: pigeonSafety.src, label: "Pigeon Safety Nets" },
  { src: carParking.src, label: "Bird Spikes" },
  { src: buildingSafety.src, label: "Building Safety Nets" },
  { src: constructionSafety.src, label: "Construction Safety Nets" },
  { src: sportsInstallation.src, label: "Industrial Safety Nets" },
  { src: swimmingPool.src, label: "Swimming Pool Nets" },
  { src: cricketNets2.src, label: "Cricket Practice Nets" },
  { src: sportsBallStop.src, label: "Ball Stop Nets" },
  { src: terraceTop.src, label: "Terrace Top Nets" },
  { src: staircaseSafety.src, label: "Staircase Safety Nets" },
  { src: coconutTree2.src, label: "Coconut Tree Nets" },
  { src: carParking2.src, label: "Car Parking Nets" },
  { src: invisibleGrill2.src, label: "Invisible Grills" },
  { src: ductArea.src, label: "Duct Area Nets" },
  { src: sportsNets.src, label: "Open Area Nets" },
  { src: balconyHanger.src, label: "Balcony Hangers" },
  { src: cricketNets.src, label: "Cricket Nets" },
  { src: terraceCricket.src, label: "Terrace Cricket Nets" },
];

const WorkGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const scroll = () => {
      scrollPos += speed;
      if (scrollPos >= container.scrollWidth / 2) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      scrollPos = container.scrollLeft;
      animationId = requestAnimationFrame(scroll);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Duplicate images for infinite scroll effect
  const allImages = [...galleryImages, ...galleryImages];

  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground text-center">
          Our Work Gallery
        </h2>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden px-4"
        style={{ scrollBehavior: "auto" }}
      >
        {allImages.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[300px] md:w-[400px] relative rounded-2xl overflow-hidden group"
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-[250px] md:h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/70 to-transparent p-4">
              <span className="text-primary-foreground font-semibold text-sm">
                {img.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkGallery;
