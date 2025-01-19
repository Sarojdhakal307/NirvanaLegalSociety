// components/GeneralMembership.tsx
import Link from 'next/link';
import React from 'react';

const GeneralMembership: React.FC = () => {
  return (
    <div className="flex justify-center mb-6">
    <section id="membership" className="sm:w-96  bg-white">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Join Nirvana Legal Society</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Become part of our growing community of legal enthusiasts and change-makers
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {/* General Membership */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">General Member</h3>
              <p className="text-gray-600">For supporters and enthusiasts</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-yellow-500 mt-1 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                </svg>
                Event participation
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-yellow-500 mt-1 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                </svg>
                Newsletter access
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-yellow-500 mt-1 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                </svg>
                Community involvement
              </li>
            </ul>
            <div className="text-center">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSeXjpLYmSuVbxDfy4WQLcyu6Qtq6wFRNY4wDn3lNy_gdJp-Jw/viewform?fbclid=IwY2xjawH4zJNleHRuA2FlbQIxMAABHdDThcgrxC-CVbrgLzIp40MyFmBJ0dV959ZGmJrvhBMsoHMgP4SqSADinA_aem_Ul7Yd9nJz1ywlBAdEfKfXQ"
                target="_blank"
                className="inline-block px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition duration-300"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default GeneralMembership;
