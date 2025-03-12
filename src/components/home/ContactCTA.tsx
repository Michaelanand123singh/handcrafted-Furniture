// File: src/components/home/ContactCTA.tsx
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Button from '../ui/Button';

const ContactCTA = () => {
  return (
    <Section background="light">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Ready to Create Your Heirloom?</h2>
        <p className="text-charcoal-600 mb-8">
          Whether you're interested in our collection or have a custom piece in mind, we'd love to hear from you and help bring your vision to life.
        </p>
        <Link to="/contact">
          <Button variant="primary" className="px-8 py-3 text-lg">
            Get in Touch
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default ContactCTA;