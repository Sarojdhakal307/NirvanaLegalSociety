// components/Testimonials.tsx

"use client";

import React from "react";
import data from "@/Data/testimonials.data.json";

interface Testimonial {
  id: number;
  initial: string;
  role: string;
  designation: string;
  testimonial: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = data;

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            What Our Members Say
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from our members about their experience with Nirvana Legal Society
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {testimonial.initial}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-blue-900">
                    {testimonial.role}
                  </h4>
                  <p className="text-gray-600">{testimonial.designation}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition duration-300"
          >
            Share Your Story
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
