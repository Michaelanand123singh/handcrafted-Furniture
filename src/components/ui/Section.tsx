// File: src/components/ui/Section.tsx
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'light' | 'dark' | 'wood';
}

const Section = ({ children, className = '', id, background = 'light' }: SectionProps) => {
  const bgClasses = {
    light: 'bg-white',
    dark: 'bg-charcoal-800 text-white',
    wood: 'bg-wood-100',
  };
  
  return (
    <section id={id} className={`section-padding ${bgClasses[background]} ${className}`}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

export default Section;