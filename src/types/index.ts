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