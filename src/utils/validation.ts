/**
 * Validation utilities for form handling
 */

// Validate email format
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  
  // Validate phone number (simple check for digits and common separators)
  export const isValidPhone = (phone: string): boolean => {
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return phoneRegex.test(phone);
  };
  
  // Check if string has minimum length
  export const hasMinLength = (value: string, minLength: number): boolean => {
    return value.trim().length >= minLength;
  };
  
  // Check if string is not empty
  export const isNotEmpty = (value: string): boolean => {
    return value.trim().length > 0;
  };
  
  // Format validation for specific form fields
  export const validateContactForm = (values: {
    name: string;
    email: string;
    phone?: string;
    message: string;
  }): Record<string, string> => {
    const errors: Record<string, string> = {};
    
    if (!isNotEmpty(values.name)) {
      errors.name = 'Name is required';
    }
    
    if (!isNotEmpty(values.email)) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(values.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (values.phone && !isValidPhone(values.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    
    if (!isNotEmpty(values.message)) {
      errors.message = 'Message is required';
    } else if (!hasMinLength(values.message, 10)) {
      errors.message = 'Message should be at least 10 characters';
    }
    
    return errors;
  };