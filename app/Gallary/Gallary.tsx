"use client"
import React, { useState } from "react";
import grad1 from "../assets/grad1.jpg";
import grad2 from "../assets/grad2.jpg";
import grad3 from "../assets/grad3.jpg";
import grad4 from "../assets/grad4.jpg";
import grad5 from "../assets/grad5.jpg";
import grad6 from "../assets/grad6.jpg";
import grad7 from "../assets/grad7.jpg";
import grad8 from "../assets/grad8.jpg";
import grad9 from "../assets/grad9.jpg";
import grad10 from "../assets/grad10.jpg";
import grad11 from "../assets/grad11.jpg";
import grad12 from "../assets/grad12.jpg";
import grad13 from "../assets/grad13.jpg";
import grad14 from "../assets/grad14.jpg";
import grad15 from "../assets/grad15.jpg";


const images = [grad1, grad2,grad3,grad4,grad5,grad6,grad7,grad8,grad9,grad10,grad11,grad12,grad13,grad14,grad15];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-6 bg-white relative">
      <h2 className="text-3xl font-semibold text-center text-purple-800 mb-6">
        📸 Graduation Day Gallery
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Memory ${index + 1}`}
            className="rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 p-2 rounded-full text-lg font-bold"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Full View"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-lg transition-transform"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
