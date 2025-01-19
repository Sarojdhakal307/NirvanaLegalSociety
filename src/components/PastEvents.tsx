import React from "react";
import EventCard from "@/components/ui/EventCard";
import events from "@/Data/Pastevent.data.json"; // Import the data.json file

const EventGrid: React.FC = () => {
  return (
    <>
      <div className="mt-11" id="pastevent">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Our Past Event
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            
          </p>
        </div>
      </div>
      <div className="overflow-y-auto  p-6">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </>
  );
};

export default EventGrid;
