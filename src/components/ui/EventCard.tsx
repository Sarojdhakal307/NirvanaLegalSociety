import React from "react";

interface EventCardProps {
  topic: string;
  description: string;
  image: string;
}

const EventCard: React.FC<EventCardProps> = ({ topic, description, image }) => {
  return (
    <div className="relative group p-6 bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 opacity-10 group-hover:opacity-25 transition-all duration-300"></div>
      {/* Image with full visibility, no cropping */}
      <img 
        src={image} 
        alt={topic} 
        className="w-full h-auto max-h-48 object-contain rounded-lg mb-4" 
      />
      {/* Event Topic */}
      <h2 className="text-2xl font-semibold text-gray-800">{topic}</h2>
      {/* Event Description */}
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default EventCard;
