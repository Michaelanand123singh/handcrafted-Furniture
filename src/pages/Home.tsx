import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedWorks from '../components/home/FeaturedWorks';
import CraftsmanshipStory from '../components/home/CraftsmanshipStory';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactCTA from '../components/home/ContactCTA';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Works Section */}
      <Section id="featured-works">
        <Container>
          <FeaturedWorks />
        </Container>
      </Section>
      
      {/* Craftsmanship Story Section */}
      <Section id="craftsmanship" className="bg-stone-100">
        <Container>
          <CraftsmanshipStory />
        </Container>
      </Section>
      
      {/* Testimonials Section */}
      <Section id="testimonials">
        <Container>
          <TestimonialsSection />
        </Container>
      </Section>
      
      {/* Contact CTA Section */}
      <Section id="contact-cta" className="bg-stone-800 text-white">
        <Container>
          <ContactCTA />
        </Container>
      </Section>
    </Layout>
  );
};

export default Home;