'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import grad1 from './assets/grad1.jpg';
import grad2 from './assets/grad2.jpg';
import grad3 from './assets/grad3.jpg';
import grad4 from './assets/grad4.jpg';
import grad5 from './assets/grad5.jpg';
import grad6 from './assets/grad6.jpg';
import grad7 from './assets/grad7.jpg';
import grad8 from './assets/grad8.jpg';
import grad9 from './assets/grad9.jpg';
import grad10 from './assets/grad10.jpg';
import grad11 from './assets/grad11.jpg';
import grad12 from './assets/grad12.jpg';
import grad13 from './assets/grad13.jpg';
import grad14 from './assets/grad14.jpg';
import grad15 from './assets/grad15.jpg';

const images: StaticImageData[] = [
  grad1, grad2, grad3, grad4, grad5,
  grad6, grad7, grad8, grad9, grad10,
  grad11, grad12, grad13, grad14, grad15
];

const stats = [
  { number: '2024', label: 'Graduation Year' },
  { number: '50+', label: 'Students' },
  { number: '15', label: 'Memories Captured' },
  { number: '100%', label: 'Success' },
];

const features = [
  { icon: '📸', title: 'Photo Gallery', description: 'Browse through our collection of precious moments' },
  { icon: '🎬', title: 'Video Memories', description: 'Watch our favorite highlights and speeches' },
  { icon: '🏆', title: 'Achievements', description: 'Celebrating academic excellence' },
  { icon: '👥', title: 'Class of 2024', description: 'Our amazing group of graduates' },
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={grad1}
            alt="Graduation Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-600/70" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-6">
            Class of 2024
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Grade 12 <span className="text-yellow-400">Graduation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Celebrating the achievements of our brilliant students as they embark on their next journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#gallery" className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-purple-900 font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
              View Gallery
            </a>
            <a href="#about" className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-full transition-all duration-300">
              Learn More
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-purple-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-white/80 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              A Journey of <span className="text-purple-600">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600">
              Our Grade 12 class has achieved remarkable milestones throughout their academic journey.
              This celebration honors their hard work, dedication, and the countless memories created along the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Images */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="text-purple-600">Moments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A glimpse into our most cherished memories from graduation day
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.slice(0, 6).map((src, index) => (
              <div
                key={index}
                className="cursor-pointer group overflow-hidden rounded-2xl"
                onClick={() => setSelectedImage(src)}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={src}
                    alt={`Graduation ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/30 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/gallery" className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all duration-300">
              View All Photos
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Relive the Magic
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Explore our complete collection of graduation memories and celebrate this special milestone with us
          </p>
          <a href="/gallery" className="inline-flex items-center gap-2 px-10 py-5 bg-yellow-500 hover:bg-yellow-400 text-purple-900 font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Gallery
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Grade 12 Graduation</h3>
              <p className="text-gray-400">
                Celebrating the academic achievements and memorable moments of our Class of 2024.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-yellow-400 transition-colors">Home</a></li>
                <li><a href="/gallery" className="hover:text-yellow-400 transition-colors">Gallery</a></li>
                <li><a href="/videos" className="hover:text-yellow-400 transition-colors">Videos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                For inquiries about the graduation ceremony or photo collection.<br />
                Email: info@graduation2024.edu
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; 2024 Grade 12 Graduation. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modal Viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 text-4xl transition-colors"
            >
              ×
            </button>
            <Image
              src={selectedImage}
              alt="Full View"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              width={1200}
              height={800}
            />
          </div>
        </div>
      )}
    </div>
  );
}
