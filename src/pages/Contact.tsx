import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Layout from '../components/layout/Layout';

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
              <p className="text-lg text-gray-600">
                Have questions about our furniture or interested in commissioning a custom piece?
                We'd love to hear from you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ContactForm />
              <ContactInfo />
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Visit Our Workshop</h2>
              <div className="bg-white rounded-lg overflow-hidden shadow-md h-96">
                {/* This would be a real map in a production environment */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Map would be displayed here</p>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-4">
                You're welcome to visit our workshop during business hours. 
                Please call ahead to schedule a consultation for custom pieces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;