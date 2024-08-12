import React from 'react';
import Header from '../components/Header';
import PhotoGallery from '../components/PhotoGallery';
import FunFacts from '../components/FunFacts';
import Milestones from '../components/Milestones';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-purple-200">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <PhotoGallery />
        <FunFacts />
        <Milestones />
      </main>
      <Footer />
    </div>
  );
};

export default Index;