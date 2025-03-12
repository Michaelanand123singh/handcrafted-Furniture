// File: src/components/home/TestimonialsSection.tsx
import Section from '../ui/Section';
import { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "/images/testimonials/customer1.jpg",
    quote: "The dining table we commissioned is absolutely stunning. The attention to detail and quality of craftsmanship exceeded our expectations.",
    role: "Homeowner"
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "/images/testimonials/customer2.jpg",
    quote: "Working with Handcrafted Furniture was a pleasure from start to finish. They listened to my ideas and created exactly what I envisioned.",
    role: "Interior Designer"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    image: "/images/testimonials/customer3.jpg",
    quote: "Our bookshelf isn't just functional—it's a work of art. The quality is exceptional, and it will clearly last for generations.",
    role: "Customer"
  }
];

const TestimonialsSection = () => {
  return (
    <Section background="dark">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">What Our Clients Say</h2>
        <p className="text-charcoal-300 max-w-2xl mx-auto">
          We take pride in creating furniture that becomes part of our clients' stories and spaces.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-charcoal-700 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full object-cover mr-4" 
              />
              <div>
                <h3 className="font-medium text-white">{testimonial.name}</h3>
                <p className="text-charcoal-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-charcoal-200 italic">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TestimonialsSection;