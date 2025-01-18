// components/ImpactSection.tsx

import React, { JSX } from 'react';

interface ImpactStat {
  number: string;
  label: string;
}

interface ImpactArea {
  title: string;
  items: string[];
  icon: JSX.Element;
}

const ImpactSection: React.FC = () => {
  const stats: ImpactStat[] = [
    { number: '500+', label: 'Students Reached' },
    { number: '35+', label: 'General Member' },
    { number: '15+', label: 'Events and Workshops' },
    { number: '10+', label: 'Education Partners' },
  ];

  const areas: ImpactArea[] = [
    {
      title: 'Legal Education',
      items: ['Regular Legal Workshops', 'Constitutional Awareness', 'Rights Education'],
      icon: (
        <svg
          className="w-8 h-8 text-blue-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: 'Youth Development',
      items: ['Leadership Training', 'Skill Development', 'Career Guidance'],
      icon: (
        <svg
          className="w-8 h-8 text-blue-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Community Outreach',
      items: ['Awareness Campaigns', 'Social Programs', 'Community Service'],
      icon: (
        <svg
          className="w-8 h-8 text-blue-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Our Impact</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Making a difference in our community through legal education and youth empowerment. We add legal aspects to every programs we conduct making it more efficient
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition duration-300 border border-gray-200"
            >
              <div className="text-4xl font-bold text-blue-900 mb-2">{stat.number}</div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Impact Areas */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">{area.title}</h3>
              <ul className="space-y-3 text-gray-600">
                {area.items.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
