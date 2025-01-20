"use client";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import emailjs from "emailjs-com";

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  console.log(
    process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
    process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
    process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID
  );
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // Clear any previous error

    const { name, email, interest, message } = formState;

    if (!name || !email || !message || !interest) {
      setError("Please fill out all required fields.");
      return;
    }

    // Replace with your EmailJS credentials
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;

    console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);
    if(!SERVICE_ID|| !TEMPLATE_ID || ! PUBLIC_KEY){
      setError("Please set the EmailJS service ID in the environment variables");
    }else{
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formState, PUBLIC_KEY)
      .then(() => {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", interest: "", message: "" }); // Reset form
      })
      .catch(() => {
        setError("Failed to send the message. Please try again.");
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Reach out to us for more information or to join our initiatives
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            {isSubmitted ? (
              <div className="text-center text-green-600">
                <h3 className="text-lg font-semibold">
                  Thank you for your message!
                </h3>
                <p>We'll get back to you shortly.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formState.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  >
                    <option value="">Select your interest</option>
                    <option value="legal-awareness">
                      Legal Awareness Programs
                    </option>
                    <option value="leadership">Leadership Development</option>
                    <option value="membership">Membership</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Tell us what you're interested in..."
                    required
                  ></textarea>
                </div>

                {error && <p className="text-red-600">{error}</p>}

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            {/* Contact Info */}
            {/* Add unchanged contact info section here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
