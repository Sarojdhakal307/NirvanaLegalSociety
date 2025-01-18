import eventData from '@/Data/UpcommingEvent.json';  // Adjust this path as needed
interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: 'Workshop' | 'Summit' | 'Outreach'; // Adjust the categories as needed
  registrationLink: string;
}

const upcomingEvents = eventData as Event[]; // Assert that the data is of type Event[]

const UpcomingEvents: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Upcoming Events
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join us in our upcoming events and be part of the change
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {upcomingEvents.map((event: Event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`${
                      event.category === 'Workshop'
                        ? 'bg-yellow-100 text-yellow-800'
                        : event.category === 'Summit'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    } text-sm font-medium px-3 py-1 rounded-full`}
                  >
                    {event.category}
                  </span>
                  <span className="text-gray-500">{event.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  {event.location}
                </div>

                {/* Registration Link Button */}
                <a
                  href={event.registrationLink}
                  className="mt-4 inline-block w-full py-2 px-4 text-center font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
