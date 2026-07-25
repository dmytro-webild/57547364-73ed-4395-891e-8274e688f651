// Created by add_section_from_catalog (HeroOverlay).

import React from 'react';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroOverlay
        textAnimation="slide-up"
        title="Hyperbaric Oxygen technology"
        imageSrc="https://storage.googleapis.com/webild/users/user_3GdLzVph1aPQWDuyELHp7aLXPvp/uploaded-1784997541496-62ask78l.jpg"
        tag="Defining the New Standard"
        primaryButton={{"href":"#contact","text":"Book a Meeting"}}
        secondaryButton={{"href":"#about","text":"Learn More"}}
        description="We offer modular, safe, and low-maintenance hyperbaric technology for those seeking supreme performance, recovery, and longevity."
      />
    </div>
  );
}
