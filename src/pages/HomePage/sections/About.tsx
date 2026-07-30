// Created by add_section_from_catalog (FeaturesBento).

import React from 'react';
import FeaturesBento from '@/components/sections/features/FeaturesBento';

export default function AboutSection(): React.JSX.Element {
  return (
    <div data-webild-section="about" data-section="about" id="about">
      <FeaturesBento
        textAnimation="fade-blur"
        tag="Our Mission"
        features={[{"bentoComponent":"media-stack","description":"Every chamber is meticulously assembled using fine materials, ensuring a luxurious and durable finish.","title":"Precision Handcrafting","mediaItems":[{"imageSrc":"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"},{"imageSrc":"https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=80"},{"imageSrc":"https://images.unsplash.com/photo-1611078813455-b461be58ef23?auto=format&fit=crop&q=80"}]},{"bentoComponent":"animated-bar-chart","description":"Real-time monitoring and data analytics provide unparalleled insights into performance and recovery metrics.","title":"Advanced Analytics"}]}
        description="We design and manufacture hard-shell hyperbaric chambers that blend medical-grade precision with intuitive design, ensuring safety, reliability, and unparalleled efficacy."
        title="Redefining Hyperbaric Care"
      />
    </div>
  );
}
