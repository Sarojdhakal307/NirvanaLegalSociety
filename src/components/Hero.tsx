/* eslint-disable @next/next/no-img-element */
// import Link from "next/link";
// import { rroupjpg } from "@/public/rroup.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-b from-white to-gray-100 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" id="el-dd377hnx">
        <div
          className="absolute transform rotate-45 -right-1/4 -top-1/4 w-2/3 h-2/3 bg-yellow-400 rounded-full"
          id="el-9j29jk07"
        ></div>
        <div
          className="absolute transform -rotate-45 -left-1/4 -bottom-1/4 w-2/3 h-2/3 bg-blue-900 rounded-full"
          id="el-t9q47xsb"
        ></div>
      </div>

      <div
        className="container mx-auto px-4 py-20 lg:py-32 relative z-10"
        id="el-4dh4aoel"
      >
        <div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          id="el-o61kn9r2"
        >
          <div className="lg:w-1/2 space-y-8" id="el-xvosb1br">
            <h1
              className="text-4xl lg:text-6xl font-bold text-blue-900"
              id="el-0he93hvt"
            >
              <span className="text-yellow-500" id="el-sowzaj19">
                Empowering
              </span>{" "}
              Society Through Legal Education
            </h1>

            <p
              className="text-lg text-gray-600 leading-relaxed"
              id="el-jb8lwloc"
            >
              A non-profit organization established by law students with a
              vision to make a positive impact on society through youth
              leadership development and legal awareness.
            </p>

            <div className="flex flex-wrap gap-4" id="el-8ip3sx83">
              <a
                href="#programs"
                className="px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition duration-300 inline-flex items-center"
                id="el-yogjymj2"
              >
                Our Programs
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="el-6z827u4q"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                    id="el-sh8yg1st"
                  ></path>
                </svg>
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50 transition duration-300"
                id="el-hnwyua92"
              >
                Join Us
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative" id="el-bwyf711t">
            <div
              className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
              id="el-195tn299"
            >
              <div className="aspect-w-16 aspect-h-9 mb-6" id="el-88se3rqe">
                {/* // eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src='/rroup.jpg'
                  alt="Image unavailable"
                  className=" m-9 object-contain transition-opacity duration-300 opacity-100 error-image"
                  loading="lazy"
                  id="el-n3gvp624"
                />
              </div>
              <div className="space-y-4 text-center" id="el-8cg9pilp">
                <div
                  className="flex items-center justify-center space-x-2"
                  id="el-8wysagim"
                >
                  <span
                    className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                    id="el-nhedvds1"
                  ></span>
                  <p className="text-gray-600" id="el-bxnmefp0">
                    Currently Active in Nepal
                  </p>
                </div>
                <div
                  className="grid grid-cols-3 gap-4 text-center"
                  id="el-q4o49h8x"
                >
                  <div className="p-3 bg-gray-50 rounded-lg" id="el-4cm7bl1b">
                    <h3
                      className="text-2xl font-bold text-blue-900"
                      id="el-uusdrne2"
                    >
                      50+
                    </h3>
                    <p className="text-sm text-gray-600" id="el-q57c2xls">
                      Members
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg" id="el-oysv6326">
                    <h3
                      className="text-2xl font-bold text-blue-900"
                      id="el-a7d58lhy"
                    >
                      20+
                    </h3>
                    <p className="text-sm text-gray-600" id="el-kql971fd">
                      Programs
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg" id="el-sr5qc8o8">
                    <h3
                      className="text-2xl font-bold text-blue-900"
                      id="el-rb8exyt1"
                    >
                      100+
                    </h3>
                    <p className="text-sm text-gray-600" id="el-bx2cuiuz">
                      Lives Impacted
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        id="el-auakvika"
      >
        <svg
          className="w-6 h-6 text-blue-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          id="el-u6ztuqn8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
            id="el-lfeyei23"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
