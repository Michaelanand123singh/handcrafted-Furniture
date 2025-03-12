import React from 'react';
import GalleryGrid from '../components/gallery/GalleryGrid';
import { FurnitureItem } from '../types';
import Layout from '../components/layout/Layout';

const Gallery: React.FC = () => {
  // In a real application, this data would come from an API or CMS
  const galleryItems: FurnitureItem[] = [
    {
      id: '1',
      name: 'Walnut Dining Table',
      description: 'Hand-crafted dining table with dovetail joints and natural finish.',
      material: 'Solid Walnut',
      imageUrl: '/featured-img/walnut.jpg',
      dimensions: {
        width: 180,
        height: 76,
        depth: 90
      },
      featured: true,
      category: 'tables'
    },
    {
      id: '2',
      name: 'Oak Bookshelf',
      description: 'Traditional bookshelf with adjustable shelves and hand-carved details.',
      material: 'Solid Oak',
      imageUrl: '/featured-img/oak.jpg',
      dimensions: {
        width: 120,
        height: 200,
        depth: 40
      },
      category: 'storage'
    },
    {
      id: '3',
      name: 'Cherry Coffee Table',
      description: 'Elegant coffee table with curved edges and natural cherry finish.',
      material: 'Cherry Wood',
      imageUrl: '/featured-img/cherry.jpg',
      dimensions: {
        width: 110,
        height: 45,
        depth: 70
      },
      featured: true,
      category: 'tables'
    },
    {
      id: '4',
      name: 'Maple Rocking Chair',
      description: 'Comfortable rocking chair with ergonomic design and smooth rocking motion.',
      material: 'Maple Wood',
      imageUrl: '/featured-img/maple.jpg',
      dimensions: {
        width: 65,
        height: 105,
        depth: 90
      },
      category: 'seating'
    },
    {
      id: '5',
      name: 'Mahogany Cabinet',
      description: 'Classic cabinet with soft-close drawers and custom brass hardware.',
      material: 'Mahogany',
      imageUrl: '/featured-img/mahogany.jpg',
      dimensions: {
        width: 90,
        height: 140,
        depth: 50
      },
      customizable: true,
      category: 'storage'
    },
    {
      id: '6',
      name: 'Pine Bed Frame',
      description: 'Rustic bed frame with mortise and tenon joinery for long-lasting stability.',
      material: 'Reclaimed Pine',
      imageUrl: '/featured-img/pine.jpg',
      dimensions: {
        width: 160,
        height: 120,
        depth: 210
      },
      customizable: true,
      category: 'bedroom'
    }
  ];

  return (
    <Layout>
      <div className="bg-amber-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Collection</h1>
            <p className="text-lg text-gray-600">
              Each piece is handcrafted with attention to detail, using traditional woodworking techniques
              and the finest sustainably sourced materials.
            </p>
          </div>
          
          <GalleryGrid items={galleryItems} />
          
          <div className="max-w-2xl mx-auto text-center mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Custom Commissions</h2>
            <p className="text-gray-600 mb-6">
              Looking for something specific? We also create custom pieces tailored to your needs 
              and space. Get in touch to discuss your vision.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-md transition-colors duration-300"
            >
              Request a Custom Piece
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;