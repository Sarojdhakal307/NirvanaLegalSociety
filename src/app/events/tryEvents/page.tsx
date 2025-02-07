"use client"
import { useState } from "react";
import { motion } from "framer-motion";

export default function CMSPage() {
  const [content, setContent] = useState({
    title: "Welcome to My Blog!",
    body: "This is a CMS-style blog page built with React. It loads content dynamically from a JSON file and features animations.",
    image: "https://source.unsplash.com/800x500/?nature",
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Blog Header */}
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {content.title}
      </motion.h1>

      {/* Featured Image */}
      {content.image && (
        <motion.img
          src={content.image}
          alt="Blog Cover"
          className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {/* Blog Body */}
      <motion.p
        className="text-lg leading-relaxed text-gray-700"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {content.body}
      </motion.p>
    </div>
  );
}
