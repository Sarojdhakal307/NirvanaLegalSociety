"use client";
import React from "react";
import Head from "next/head";

const BlogPage = () => {
  const blogTitle = "सैनामैना पर्रोहा परमेश्वरमा संघीय नमुना संसद सम्पन्न";
  const blogDescription =
    "सैनामैना पर्रोहा परमेश्वर नमूना विद्यालयमा संघीय नमुना संसद, २०८१ सम्पन्न भयो। विध्यार्थीहरुले संसदको व्यवहारिक अनुभव प्राप्त गरे।";
  const blogImage =
    "https://nirvanalegalsociety.vercel.app/eventphoto/mockparliamentinsainamainaMavi.jpg"; // Ensure the image is publicly accessible

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Open Graph Meta Tags */}
      <Head>
        <title>{blogTitle}</title>
        <meta property="og:title" content={blogTitle} />
        <meta property="og:description" content={blogDescription} />
        <meta property="og:image" content={blogImage} />
        <meta
          property="og:url"
          content="https://nirvanalegalsociety.vercel.app/events"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Blog Content */}
      <main className="container mx-auto px-4 md:px-8 py-10">
        <article className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg transition-transform hover:scale-[1.02]">
          {/* Blog Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{blogTitle}</h2>

          {/* Author and Date */}
          <p className="text-gray-600 text-sm">२३ माघ २०८१, बुधबार</p>

          {/* Blog Image */}
          <img
            src={blogImage}
            alt="Mock Parliament Event"
            className="w-full object-cover rounded-xl mb-6"
          />

          {/* Blog Content */}
          <p className="text-gray-800 mt-4 leading-relaxed">
            सैनामैनाको रानिबगिया स्थित श्री सैनामैना पर्रोहा परमेश्वर नमूना
            विद्यालयमा संघीय नमुना संसद, २०८१ सम्पन्न भएको छ।
          </p>
        </article>
      </main>
    </div>
  );
};

export default BlogPage;
