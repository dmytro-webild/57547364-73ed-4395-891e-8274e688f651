import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesComparison from '@/components/sections/features/FeaturesComparison';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroTiltedCards from '@/components/sections/hero/HeroTiltedCards';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TeamStackedCards from '@/components/sections/team/TeamStackedCards';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroTiltedCards
      tag="Defining the New Standard"
      title="Lifetech hyperbaric chambers"
      description="We offer modular, safe, and low-maintenance technology, validated by medics and athletes, for those seeking supreme performance and longevity."
      primaryButton={{
        text: "Book a Meeting",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Learn More",
        href: "#about",
      }}
      items={[
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3GdLzVph1aPQWDuyELHp7aLXPvp/uploaded-1784297351381-w31lyzkp.png",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3GdLzVph1aPQWDuyELHp7aLXPvp/uploaded-1784297351383-3yeprdxt.png",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3GdLzVph1aPQWDuyELHp7aLXPvp/uploaded-1784297351383-rexd9jn7.png",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3GdLzVph1aPQWDuyELHp7aLXPvp/uploaded-1784297351384-5i8zdreh.png",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3GdLzVph1aPQWDuyELHp7aLXPvp/uploaded-1784297351384-oywxfnqd.png",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutMediaOverlay
      tag="Our Mission"
      title="Redefining Hyperbaric Care"
      description="We design and manufacture hard-shell hyperbaric chambers that blend medical-grade precision with intuitive design, ensuring safety, reliability, and unparalleled efficacy."
      imageSrc="http://img.b2bpic.net/free-photo/empty-laboratory-with-scientific-monitor-desk_482257-18203.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesComparison
      tag="Why Choose Us"
      title="Safety & Excellence Built-in"
      description="Compare our standards to ordinary alternatives and see why medical and wellness professionals choose Oxyhelp."
      negativeItems={[
        "High maintenance overhead",
        "Proprietary, closed ecosystems",
        "Inconsistent safety certification",
      ]}
      positiveItems={[
        "Low-maintenance design",
        "Modular technology stack",
        "Full global medical validation",
        "User-centric safety protocols",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="products" data-section="products">
    <SectionErrorBoundary name="products">
          <FeaturesImageBento
      tag="Technology"
      title="Engineering Superiority"
      description="Explore the advanced components and high-standard engineering behind our hyperbaric chambers."
      items={[
        {
          title: "Precision Hardware",
          description: "High-grade atmospheric controls.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-nurses-work_23-2149341556.jpg",
        },
        {
          title: "Comfort Interior",
          description: "Spacious and intuitive cabin.",
          imageSrc: "http://img.b2bpic.net/free-photo/cat-scan-machine-hospital-with-no-people_637285-4945.jpg",
        },
        {
          title: "Real-time Metrics",
          description: "Advanced health data monitoring.",
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-med-school-pupil-studies-pharmacology-notes-library_482257-117779.jpg",
        },
        {
          title: "Wellness Aesthetic",
          description: "Fits clinical and spa environments.",
          imageSrc: "http://img.b2bpic.net/free-photo/electromagnetic-therapy-back-physiotherapist-doctor-uses-medical-equipment-highly-effective-pain-treatment-inflammation-back-magnetic-field-rehabilitation-magnetotherapy_169016-41688.jpg",
        },
        {
          title: "Structural Integrity",
          description: "Certified modular frame.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-mechanics-holding-laptop-diagnostics-tool-truck-workshop_342744-1334.jpg",
        },
        {
          title: "Secure Access",
          description: "Reliable entry mechanisms.",
          imageSrc: "http://img.b2bpic.net/free-photo/red-themed-circuit-board-with-chip-close-up_23-2148284294.jpg",
        },
        {
          title: "Global Deployment",
          description: "Validated for worldwide use.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-ready-get-ct-scan_23-2149341496.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="science" data-section="science">
    <SectionErrorBoundary name="science">
          <MetricsSimpleCards
      tag="Impact"
      title="Proven Efficacy"
      description="Our technology is backed by data and trusted by global leaders in medicine and sports performance."
      metrics={[
        {
          value: "99.9%",
          description: "Operational uptime rate",
        },
        {
          value: "120+",
          description: "Certified global facilities",
        },
        {
          value: "25k+",
          description: "Successful treatment sessions",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="team" data-section="team">
    <SectionErrorBoundary name="team">
          <TeamStackedCards
      tag="Leadership"
      title="The Minds Behind Oxyhelp"
      description="Our team of engineers, medics, and innovators drives the future of hyperbaric technology."
      members={[
        {
          name: "Alex Rivet",
          role: "Lead Engineer",
          imageSrc: "http://img.b2bpic.net/free-photo/family-doctor-doctor-s-office_23-2148168431.jpg",
        },
        {
          name: "Sarah Chen",
          role: "Head of Medical Validation",
          imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-working-warehouse_329181-12823.jpg",
        },
        {
          name: "Marcus Thorne",
          role: "Product Director",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-exhausted-workaholic-man-manager-typing-financial-strategy-using-laptop-computer-while-sitting-desk-table-business-company-office_482257-2321.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="Trust"
      title="Validation from Professionals"
      description="Trusted by doctors, athletes, and wellness studios worldwide."
      testimonials={[
        {
          name: "Dr. Elena Rossi",
          role: "Clinician",
          quote: "The reliability of Oxyhelp chambers is unmatched in my clinical practice.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-happy-bearded-man-suit-laughing-smiling-standing-white-background_1258-155212.jpg",
        },
        {
          name: "James L.",
          role: "Pro Athlete",
          quote: "My recovery time has significantly decreased since using Oxyhelp technology.",
          imageSrc: "http://img.b2bpic.net/free-photo/horizontal-portrait-beautiful-positive-young-european-female-blue-shirt-dress-relaxing-home-looking-front-with-easy-carefree-smile_343059-3894.jpg",
        },
        {
          name: "Maria K.",
          role: "Clinic Owner",
          quote: "A perfect blend of user-friendly technology and clinical safety.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
        },
        {
          name: "Robert D.",
          role: "Physiotherapist",
          quote: "Highly recommended for any facility focused on patient longevity.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-african-american-girl-sitting-cafe_1262-3083.jpg",
        },
        {
          name: "Sarah W.",
          role: "Wellness Director",
          quote: "Our clients love the intuitive design and the immediate safety assurance.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-businesswoman-smiling-camera_74855-3966.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social" data-section="social">
    <SectionErrorBoundary name="social">
          <SocialProofMarquee
      tag="Verified Global Presence"
      title="Trusted Globally"
      description="Featured in leading medical publications and used by international facilities."
      names={[
        "MedTech Today",
        "SportPerformance Weekly",
        "Clinical Innovations",
        "Global Health Forum",
        "Hyperbaric Journal",
        "Wellness Solutions",
        "Modern Medicine",
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Support"
      title="Common Questions"
      description="Everything you need to know about our hyperbaric chambers and support."
      categories={[
        {
          name: "Safety",
          items: [
            {
              question: "Are these chambers safe?",
              answer: "Yes, our chambers are fully certified and undergo rigorous testing.",
            },
          ],
        },
        {
          name: "Maintenance",
          items: [
            {
              question: "Is it hard to maintain?",
              answer: "No, we've designed them for low-maintenance daily operation.",
            },
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get in touch"
      text="Ready to elevate your facility's performance? Contact us to discuss our hyperbaric solutions."
      primaryButton={{
        text: "Book a Meeting",
        href: "#",
      }}
      secondaryButton={{
        text: "Contact Support",
        href: "#",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
