import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-300 to-purple-300 p-6 text-center flex flex-col items-center">
      <Avatar className="w-24 h-24 mb-4">
        <AvatarImage src="https://placekitten.com/100/100" alt="Lea's avatar" />
        <AvatarFallback>Lea</AvatarFallback>
      </Avatar>
      <h1 className="text-4xl font-bold text-purple-800 mb-2">Lea's Magical World</h1>
      <p className="text-xl text-purple-600">Join the adventure of a 2.5-year-old explorer!</p>
    </header>
  );
};

export default Header;