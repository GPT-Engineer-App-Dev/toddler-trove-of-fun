import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const funFacts = [
  { title: "Favorite Color", content: "Pink" },
  { title: "Favorite Toy", content: "Teddy Bear" },
  { title: "Favorite Food", content: "Spaghetti" },
  { title: "Favorite Activity", content: "Drawing" },
];

const FunFacts = () => {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-semibold text-purple-700 mb-4">Fun Facts About Lea</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {funFacts.map((fact, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg text-purple-600">{fact.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold">{fact.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FunFacts;