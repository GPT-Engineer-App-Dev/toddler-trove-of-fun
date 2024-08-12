import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";

const photos = [
  { src: "https://placekitten.com/300/300", alt: "Lea playing in the park", caption: "Having fun at the park!" },
  { src: "https://placekitten.com/301/301", alt: "Lea's 2nd birthday", caption: "Blowing out candles on her 2nd birthday" },
  { src: "https://placekitten.com/302/302", alt: "Lea painting", caption: "Creating a masterpiece" },
  { src: "https://placekitten.com/303/303", alt: "Lea with her teddy bear", caption: "Cuddling with her favorite toy" },
  { src: "https://placekitten.com/304/304", alt: "Lea at the beach", caption: "First time at the beach" },
  { src: "https://placekitten.com/305/305", alt: "Lea dressed up", caption: "Playing dress-up" },
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="my-8">
      <h2 className="text-3xl font-semibold text-purple-700 mb-4">Lea's Photo Album</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer">
                  <CardContent className="p-0">
                    <img src={photo.src} alt={photo.alt} className="w-full h-48 object-cover" />
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <img src={photo.src} alt={photo.alt} className="w-full h-auto mb-4" />
                <p className="text-center text-gray-600">{photo.caption}</p>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;