// components/ProgramsSection.tsx
import React from "react";
import programData from "@/Data/programsection.data.json";

export interface ProgramItem {
  text: string;
  icon: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  items: ProgramItem[];
}

const ProgramsSection: React.FC = () => {
  return (
    <div
      id="bbb22400-3d2c-45ad-b469-dcab22cd7aa9"
      data-section_id="bbb22400-3d2c-45ad-b469-dcab22cd7aa9"
      className="page_sectionHighlight__ahPeD sectionCode"
    >
      <section id="programs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Our Programs
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our comprehensive programs designed to empower and
              educate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {programData.map((program: Program) => (
              <div
                key={program.id}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition duration-300 border border-gray-200"
              >
                <div className="bg-blue-900 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
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
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <ul className="text-gray-600 space-y-2">
                  {program.items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-4 h-4 text-yellow-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                      </svg>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsSection;
