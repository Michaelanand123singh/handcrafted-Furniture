// FurnitureItem type
export interface FurnitureItem {
    id: string;
    name: string;
    description: string;
    material: string;
    imageUrl: string;
    dimensions?: {
      width: number;
      height: number;
      depth: number;
    };
    price?: number;
    category?: string;
    featured?: boolean;
    customizable?: boolean;
  }
  
  // Contact form data type
  export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    message: string;
  }
  
  // Navigation item type
  export interface NavItem {
    label: string;
    path: string;
    isExternal?: boolean;
  }

  // Add this to src/types/index.ts
export interface Testimonial {
    id: number; // Using number instead of string based on your implementation
    name: string;
    image: string; // Using image instead of imageUrl to match your component
    quote: string; // Using quote instead of text
    role: string; // Using role instead of position
  }