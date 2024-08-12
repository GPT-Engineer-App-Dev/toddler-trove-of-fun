import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const photos = [
  { src: "https://placekitten.com/300/300", alt: "Lea playing" },
  { src: "https://placekitten.com/301/301", alt: "Lea's birthday" },
  { src: "https://placekitten.com/302/302", alt: "Lea at the park" },
];

const PhotoGallery = () => {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-semibold text-purple-700 mb-4">Photo Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <img src={photo.src} alt={photo.alt} className="w-full h-auto object-cover" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;