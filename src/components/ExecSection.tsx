"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  
  {
    id: 2,
    name: "Kabita Chapagain",
    designation: "Executive",
    image: "/exec/kabita.jpg",
  },
  
  {
    id: 5,
    name: "Nischal Gyawali",
    designation: "Executive",
    image: "/exec/nischal.jpg",
  },
  {
    id: 4,
    name: "Kriti Koirala",
    designation: "Executive",
    image: "/exec/kriti.jpg",
  },
  {
    id: 6,
    name: "Bishnu Gautam",
    designation: "Executive",
    image: "/exec/bishnugautam.jpg",
  },
  {
    id: 7,
    name: "Bishnu Dhakal",
    designation: "Treasurer",
    image: "/exec/bishnudhakal.jpg",
  },
  {
    id: 1,
    name: "Pratima Pandey",
    designation: "Vice Secretary",
    image: "/exec/pratimapandey.jpg",
  },
  {
    id: 8,
    name: "Nabin Poudel",
    designation: "Secretary",
    image: "/exec/nabin.jpg",
  },
  {
    id: 3,
    name: "Janisha Subedi ",
    designation: "Vice President",
    image: "/exec/jenisha.jpg",
  },
  {
    id: 9,
    name: "Bijay Sunar",
    designation: "President",
    image: "/exec/bijay.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <>
      <div className="flex flex-row items-center justify-center   w-full">
        <AnimatedTooltip items={people} />
      </div>
      <h4 className="text-center text-xl font-medium font-serif text-gray-800 bg-white p-4 rounded-lg shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-lg animate-fade-in">
        Executive Members
      </h4>
    </>
  );
}
