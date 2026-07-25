import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowUpRight, Loader2 } from "lucide-react";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import useProducts from "@/hooks/useProducts";

export default function ProductsPage() {
  return (
    <>
      <div data-webild-section="HeroSplit"><section aria-label="Hero section" className="relative flex items-center h-fit md:h-svh pt-25 pb-20 md:py-0"><HeroBackgroundSlot /><div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 w-content-width mx-auto"><div className="w-full md:w-1/2"><div className="flex flex-col items-center md:items-start gap-3"><div className="px-3 py-1 mb-1 text-sm card rounded w-fit"><p>Hyperbaric Chambers</p></div><TextAnimation text="Advanced Hyperbaric Solutions" variant="fade-blur" gradientText={true} tag="h1" className="text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-center md:text-left text-balance" /><TextAnimation text="Discover our industry-leading monoplace and multiplace hard-shell chambers. Designed with medical-grade precision to ensure safety, reliability, and optimal patient outcomes." variant="fade-blur" gradientText={false} tag="p" className="md:max-w-8/10 text-lg md:text-xl leading-snug text-center md:text-left text-balance" /><div className="flex flex-wrap max-md:justify-center gap-3 mt-2 md:mt-3"><Button text="Monoplace Models" href="#monoplace" variant="primary" /><Button text="Multiplace Models" href="#multiplace" variant="secondary" animationDelay={0.1} /></div></div></div><ScrollReveal variant="fade" delay={0.2} className="w-full md:w-1/2 h-100 md:h-[65vh] md:max-h-[75svh] p-2 xl:p-3 2xl:p-4 card rounded overflow-hidden"><ImageOrVideo imageSrc="https://img.freepik.com/premium-photo/modern-medical-equipment-hospital-room_1048944-10255531.jpg" /></ScrollReveal></div></section></div>
      <div data-webild-section="ProductMediaCards"><section aria-label="Products section" className="py-20"><div className="w-content-width mx-auto flex justify-center"><Loader2 className="size-8 animate-spin text-foreground" strokeWidth={1.5} /></div></section></div>
      <div data-webild-section="ProductMediaCards"><section aria-label="Products section" className="py-20"><div className="w-content-width mx-auto flex justify-center"><Loader2 className="size-8 animate-spin text-foreground" strokeWidth={1.5} /></div></section></div>
    </>
  );
}
