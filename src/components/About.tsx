import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              About Nirvana Legal Society
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Empowering youth through legal education and leadership
              development since 2080 BS
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column with Features */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition duration-300">
                <div className="bg-blue-900 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    Expanding Across Nepal
                  </h3>
                  <p className="text-gray-600">
                    From Sainamaina to nationwide presence, we&apos;re growing our
                    impact across Nepal through dedicated membership programs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition duration-300">
                <div className="bg-blue-900 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    Legal Education
                  </h3>
                  <p className="text-gray-600">
                    Providing comprehensive legal awareness through campaigns,
                    workshops, and educational programs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition duration-300">
                <div className="bg-blue-900 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    Youth Leadership
                  </h3>
                  <p className="text-gray-600">
                    Fostering leadership skills and personal development
                    through specialized training programs.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column with Stats */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-8">
                Our Impact in Numbers
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">
                    25+
                  </div>
                  <div className="text-gray-600">Legal Awareness Programs</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">
                    500+
                  </div>
                  <div className="text-gray-600">Students Reached</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">
                    15+
                  </div>
                  <div className="text-gray-600">Partner Organizations</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">
                    30+
                  </div>
                  <div className="text-gray-600">Active Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
    