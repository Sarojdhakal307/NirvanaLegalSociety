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
  // console.log(
  //   process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
  //   process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
  //   process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID
  // );
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

    // console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError(
        "Please set the EmailJS service ID in the environment variables"
      );
    } else {
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
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-yellow-500 mt-1 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-600">
                        Sainamaina-06, Rupandehi, Nepal
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-yellow-500 mt-1 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">
                        nirvanalegalsociety@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {/* Replace with SVG for Facebook */}
                  <SocialIcon
                    network="facebook"
                    bgColor="white"
                    fgColor="blue"
                    url="https://www.facebook.com/profile.php?id=100090878146615"
                  />
                  {/* <a
                    href="#"
                    className="text-gray-600 hover:text-blue-900 transition duration-300"
                  >
                    Replace with SVG for Twitter 
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-900 transition duration-300"
                  >
                     Replace with SVG for Instagram 
                  </a> */}
                </div>
                <h4 className="mt-3 font-semibold ">Read a time :</h4>
                <div className="text-gray-600 mt-1 border-t-black border-spacing-2">
                  Nepal struggles with various illegal and harmful activities
                  that damage its society. Problems like corruption, human
                  trafficking, drug smuggling, and violence against women are
                  common. One heartbreaking example is the case of Nirmala
                  Panta, a 13-year-old girl from Kanchanpur who was raped and
                  murdered in 2018. Despite public outrage and protests, the
                  authorities failed to find and punish those responsible,
                  showing weaknesses in Nepal&apos;s legal and investigative
                  systems. Such incidents lower people&apos;s trust in the
                  government and create fear in society. To solve these
                  problems, Nepal needs stronger laws, better accountability,
                  and joint efforts to ensure justice and safety !
                </div>
              </div>
            </div>
            {/* Contact Info */}
            {/* Add unchanged contact info section here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
