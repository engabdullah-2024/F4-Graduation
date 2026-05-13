'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link'; // Fixed: Changed from react-router-dom

// Asset Imports
import grad1 from '../assets/grad1.jpg';
import grad2 from '../assets/grad2.jpg';
import grad3 from '../assets/grad3.jpg';
import grad4 from '../assets/grad4.jpg';
import grad5 from '../assets/grad5.jpg';
import grad6 from '../assets/grad6.jpg';
import grad7 from '../assets/grad7.jpg';
import grad8 from '../assets/grad8.jpg';
import grad9 from '../assets/grad9.jpg';
import grad10 from '../assets/grad10.jpg';
import grad11 from '../assets/grad11.jpg';
import grad12 from '../assets/grad12.jpg';
import grad13 from '../assets/grad13.jpg';
import grad14 from '../assets/grad14.jpg';
import grad15 from '../assets/grad15.jpg';

const images: { src: StaticImageData; title: string; category: string }[] = [
  { src: grad1, title: 'Opening Ceremony', category: 'Ceremony' },
  { src: grad2, title: 'Group Photo', category: 'Group' },
  { src: grad3, title: 'Speech Moment', category: 'Speech' },
  { src: grad4, title: 'Award Ceremony', category: 'Awards' },
  { src: grad5, title: 'Friends Forever', category: 'Friends' },
  { src: grad6, title: 'Graduation Caps', category: 'Ceremony' },
  { src: grad7, title: 'Family Celebration', category: 'Family' },
  { src: grad8, title: 'Certificate Handover', category: 'Awards' },
  { src: grad9, title: 'Classmates', category: 'Group' },
  { src: grad10, title: 'Joyful Moment', category: 'Celebration' },
  { src: grad11, title: 'Principal Speech', category: 'Speech' },
  { src: grad12, title: 'Trophy Time', category: 'Awards' },
  { src: grad13, title: 'BFFs', category: 'Friends' },
  { src: grad14, title: 'Proud Parents', category: 'Family' },
  { src: grad15, title: 'Final Group', category: 'Group' },
];

const categories = ['All', 'Ceremony', 'Group', 'Speech', 'Awards', 'Friends', 'Family', 'Celebration'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(img => img.category === selectedCategory);

  const openLightbox = (image: StaticImageData, index: number) => {
    setSelectedImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1;
    setLightboxIndex(newIndex);
    setSelectedImage(filteredImages[newIndex].src);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = lightboxIndex === filteredImages.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(newIndex);
    setSelectedImage(filteredImages[newIndex].src);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-700 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-6 text-white">
            memories
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Photo <span className="text-yellow-400">Gallery</span>
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Browse through our collection of precious moments from graduation day
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white shadow-sm sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((item, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => openLightbox(item.src, index)}
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-semibold">{item.title}</p>
                    <span className="text-sm text-purple-200">{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No photos found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-purple-900">
        <div className="container mx-auto px-4 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">{images.length}</div>
              <div className="text-white/80">Total Photos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">{categories.length - 1}</div>
              <div className="text-white/80">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">2024</div>
              <div className="text-white/80">Year</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-white/80">Memories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white text-4xl transition-colors z-10"
          >
            ×
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white text-5xl transition-colors z-10"
          >
            ‹
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white text-5xl transition-colors z-10"
          >
            ›
          </button>

          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Full View"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
              width={1200}
              height={800}
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <h3 className="text-white font-semibold text-xl">
                {filteredImages[lightboxIndex]?.title}
              </h3>
              <p className="text-purple-200">
                {filteredImages[lightboxIndex]?.category} • {lightboxIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Grade 12 Graduation</h3>
          <p className="text-gray-400 mb-6">Celebrating the academic achievements and memorable moments.</p>
          <div className="flex justify-center gap-6 text-gray-400">
            <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
            <Link href="/gallery" className="hover:text-yellow-400 transition-colors">Gallery</Link>
            <Link href="/videos" className="hover:text-yellow-400 transition-colors">Videos</Link>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 Grade 12 Graduation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}