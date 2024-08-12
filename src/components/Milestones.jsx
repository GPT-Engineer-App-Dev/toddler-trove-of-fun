import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const milestones = [
  { age: "6 months", achievement: "First tooth" },
  { age: "9 months", achievement: "Started crawling" },
  { age: "1 year", achievement: "First steps" },
  { age: "18 months", achievement: "First words" },
  { age: "2 years", achievement: "Potty training" },
  { age: "2.5 years", achievement: "Riding a tricycle" },
];

const Milestones = () => {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-semibold text-purple-700 mb-4">Lea's Milestones</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {milestones.map((milestone, index) => (
          <Card key={index} className="bg-gradient-to-br from-pink-100 to-purple-100">
            <CardHeader>
              <CardTitle className="text-lg text-purple-600 flex justify-between items-center">
                {milestone.achievement}
                <Badge variant="secondary">{milestone.age}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Lea reached this milestone at {milestone.age}!</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Milestones;