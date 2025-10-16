"use client";

import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/FeatureCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  {"id": "hero-img", "url": "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A soft-lit hotel room entrance, welcoming guests with luxury appeal and comfort."},
  {"id":"about-img","url":"https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A soft-lit hotel room entrance, welcoming guests with luxury appeal and comfort."},
  {"id":"feature-img1","url":"https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Peaceful bedroom in tropical villa with balcony view, perfect for relaxation."},
  {"id":"feature-img2","url":"https://images.pexels.com/photos/3673978/pexels-photo-3673978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A serene moment of relaxation and wellness in a Budapest, Hungary hotel spa."},
  {"id":"contact-img","url":"https://images.pexels.com/photos/3215531/pexels-photo-3215531.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A man playfully interacts with a woman at a reception desk in a lively and modern office setting."}
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay navItems={[
          { name: 'Home', id: 'home' },
          { name: 'About', id: 'about' },
          { name: 'Contact', id: 'contact' },
          { name: 'Services', id: 'services' },
        ]} brandName="Hotel" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Your Dream Hotel"
            description="Experience luxury and comfort in the heart of the city."
            imageSrc="asset://hero-img"
            buttons={[
              { text: 'Book Now', href: 'contact' },
              { text: 'Explore', href: 'about' }
            ]}
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Elegance", description: "Sophisticated design and top-notch amenities." },
              { title: "Convenience", description: "Located in the heart of the city, close to major attractions." }
            ]}
            imageSrc="asset://about-img"
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>
      <div id="features" data-section="features" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardThree
            features={[
              { id: "01", title: "Luxurious Rooms", description: "Relax in our plush rooms with a stunning city view.", imageSrc: "asset://feature-img1" },
              { id: "02", title: "Exclusive Spa", description: "Rejuvenate at our world-class spa services.", imageSrc: "asset://feature-img2" }
            ]}
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>
      <div id="testimonials" data-section="testimonials" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            testimonials={[
              { id: "1", name: "John Doe", role: "Traveler", testimonial: "An unforgettable experience! The hospitality was unmatched." },
              { id: "2", name: "Jane Smith", role: "Business Executive", testimonial: "Perfect blend of luxury and business facilities." }
            ]}
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Stay with Us"
            title="Contact Us"
            description="Reach us any time for bookings or inquiries."
            imageSrc="asset://contact-img"
            mediaPosition="left"
            showCard={true}
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "About Us", items: [{ label: "Our Story", href: "about" }, { label: "Blog", href: "blog" }] },
              { title: "Services", items: [{ label: "Room Services", href: "#" }, { label: "Spa & Wellness", href: "#" }] },
              { title: "Connect", items: [{ label: "Contact", href: "contact" }, { label: "Support", href: "#" }] }
            ]}
            copyrightText="© 2025 Dream Hotel"
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
