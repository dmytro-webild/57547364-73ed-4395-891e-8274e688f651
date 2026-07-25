import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBrand from "@/components/sections/hero/HeroBrand";
import FeaturesMediaCards from "@/components/sections/features/FeaturesMediaCards";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="Hyperbaric"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Contact Us", href: "/contact" }}
      />
      
      <main className="flex-grow">
        <HeroBrand
          brand="Our Products"
          description="Discover our industry-leading monoplace and multiplace hyperbaric chambers designed for clinical excellence."
          primaryButton={{ text: "Request Quote", href: "/contact" }}
          secondaryButton={{ text: "View Models", href: "#models" }}
          textAnimation="fade-blur"
        />
        
        <div id="models" className="flex flex-col gap-12 py-12">
          <FeaturesMediaCards
            tag="Monoplace Models"
            title="Single Patient Chambers"
            description="Advanced monoplace chambers offering comfort and precision for individual treatments."
            items={[
              { title: "Model i80", description: "Compact and efficient monoplace chamber.", imageSrc: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80" },
              { title: "Model i90", description: "Enhanced monoplace chamber with advanced monitoring capabilities.", imageSrc: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80" },
              { title: "Model C1", description: "Standard clinical monoplace system for everyday use.", imageSrc: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80" },
              { title: "Model C1E", description: "Premium monoplace system with extended features and comfort.", imageSrc: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80" }
            ]}
            textAnimation="fade-blur"
          />
          
          <FeaturesMediaCards
            tag="Multiplace Models"
            title="Multi-Patient Chambers"
            description="Spacious multiplace chambers designed for simultaneous treatment of multiple patients with medical staff inside."
            items={[
              { title: "Model C2", description: "Dual-patient multiplace chamber for small groups.", imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" },
              { title: "Model C3", description: "Three-patient multiplace chamber balancing size and capacity.", imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" },
              { title: "Model C4", description: "Four-patient multiplace chamber for busy clinical settings.", imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" },
              { title: "Model C5", description: "Five-patient high-capacity multiplace chamber.", imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" }
            ]}
            textAnimation="fade-blur"
          />
        </div>
      </main>

      <FooterSimple
        brand="Hyperbaric"
        copyright="© 2024 Hyperbaric Solutions. All rights reserved."
        columns={[
          { title: "Company", items: [{ label: "About Us", href: "/about" }, { label: "Contact", href: "/contact" }] },
          { title: "Products", items: [{ label: "Monoplace", href: "#models" }, { label: "Multiplace", href: "#models" }] }
        ]}
        links={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" }
        ]}
      />
    </div>
  );
}