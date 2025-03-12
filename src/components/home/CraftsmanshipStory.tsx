// File: src/components/home/CraftsmanshipStory.tsx
import Section from '../ui/Section';

const CraftsmanshipStory = () => {
  return (
    <Section background="wood">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Craftsmanship Story</h2>
          <p className="text-charcoal-700 mb-4">
            For over 15 years, each piece that leaves our workshop has been shaped by hand with traditional techniques passed down through generations, combined with contemporary design sensibilities.
          </p>
          <p className="text-charcoal-700 mb-4">
            We source only the finest sustainable hardwoods, carefully selecting each board for its unique character and grain pattern. From the initial sketch to the final hand-rubbed finish, every step is performed with meticulous attention to detail.
          </p>
          <p className="text-charcoal-700">
            Our commitment to quality means we never cut corners or rush the process. A piece of our furniture isn't just built to look beautiful today—it's crafted to become an heirloom that will tell your family's story for generations.
          </p>
        </div>
        
        <div className="order-1 md:order-2">
          <img 
            src="/craftsman/craftsman.jpg" 
            alt="Craftsman working on wooden furniture" 
            className="rounded-lg shadow-lg w-full h-auto" 
          />
        </div>
      </div>
    </Section>
  );
};

export default CraftsmanshipStory;