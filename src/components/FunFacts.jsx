import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const funFacts = [
  { title: "Favorite Color", content: "Pink", icon: "🎨" },
  { title: "Favorite Toy", content: "Teddy Bear", icon: "🧸" },
  { title: "Favorite Food", content: "Spaghetti", icon: "🍝" },
  { title: "Favorite Activity", content: "Drawing", icon: "✏️" },
  { title: "Favorite Animal", content: "Elephant", icon: "🐘" },
  { title: "Favorite Book", content: "The Very Hungry Caterpillar", icon: "📚" },
];

const FunFacts = () => {
  const [selectedFact, setSelectedFact] = useState(null);

  return (
    <section className="my-8">
      <h2 className="text-3xl font-semibold text-purple-700 mb-4">Fun Facts About Lea</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-4">
        {funFacts.map((fact, index) => (
          <Button
            key={index}
            variant={selectedFact === index ? "secondary" : "outline"}
            className="h-20 flex flex-col items-center justify-center"
            onClick={() => setSelectedFact(index)}
          >
            <span className="text-2xl mb-1">{fact.icon}</span>
            <span className="text-xs">{fact.title}</span>
          </Button>
        ))}
      </div>
      {selectedFact !== null && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-gradient-to-r from-pink-100 to-purple-100">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-600 flex items-center">
                <span className="mr-2">{funFacts[selectedFact].icon}</span>
                {funFacts[selectedFact].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold">{funFacts[selectedFact].content}</p>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </section>
  );
};

export default FunFacts;