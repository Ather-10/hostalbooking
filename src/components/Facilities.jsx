// import { div } from "framer-motion/client";
// import React, { useState } from "react";
// import { FaWifi, FaUtensils, FaShieldAlt, FaTv, FaBroom, FaMapMarkerAlt } from "react-icons/fa";

// export default function Facilities() {
//   const facilities = [
//     {
//       icon: <FaWifi className="text-blue-500 text-4xl" />,
//       title: "Free High-Speed WiFi",
//       description: "Stay connected 24/7 with our fast and reliable internet throughout the hostel premises.",
//       details: "We provide unlimited high-speed WiFi with no extra cost. Perfect for online classes, work-from-home, or binge-watching your favorite shows.",
//     },
//     {
//       icon: <FaUtensils className="text-yellow-500 text-4xl" />,
//       title: "Complimentary Meals",
//       description: "Enjoy freshly cooked meals with a variety of options every day.",
//       details: "Our kitchen serves breakfast, lunch, and dinner with a rotating menu to keep your taste buds happy.",
//     },
//     {
//       icon: <FaShieldAlt className="text-green-500 text-4xl" />,
//       title: "24/7 Security",
//       description: "Your safety is our top priority with round-the-clock surveillance.",
//       details: "Security guards, CCTV cameras, and biometric access ensure your safety at all times.",
//     },
//     {
//       icon: <FaTv className="text-purple-500 text-4xl" />,
//       title: "Entertainment Lounge",
//       description: "Relax and enjoy movies, games, and fun activities in our common lounge.",
//       details: "Includes a big-screen TV, gaming consoles, and a mini library for leisure time.",
//     },
//     {
//       icon: <FaBroom className="text-pink-500 text-4xl" />,
//       title: "Daily Housekeeping",
//       description: "Clean rooms every day for a fresh and tidy stay.",
//       details: "Our housekeeping staff ensures your rooms are spotless and hygienic daily.",
//     },
//     {
//       icon: <FaMapMarkerAlt className="text-red-500 text-4xl" />,
//       title: "Prime Location",
//       description: "Easily accessible with shops, cafes, and transport nearby.",
//       details: "Located in the heart of the city with easy access to malls, public transport, and tourist attractions.",
//     },
//   ];

//   const [selectedFacility, setSelectedFacility] = useState(null);

//   return (
//     <section id="facilities" className="py-16 bg-gray-50">
//       <div className="container mx-auto px-6">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
//           Hostel Facilities
//         </h2>
//         <p className="text-gray-600 text-center mt-3 mb-10 max-w-2xl mx-auto">
//           We provide world-class facilities to make your stay comfortable, safe, and enjoyable.
//         </p>

//         {/* Facilities Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {facilities.map((facility, index) => (
//             <div
//               key={index}
//               onClick={() => setSelectedFacility(facility)}
//               className="cursor-pointer bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
//             >
//               <div className="mb-4 flex justify-center">{facility.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{facility.title}</h3>
//               <p className="text-gray-600 text-sm">{facility.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedFacility && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           {/* Overlay */}
//           <div
//             className="absolute inset-0 bg-black/50"
//             onClick={() => setSelectedFacility(null)}
//           ></div>

//           {/* Modal Box */}
//           <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full z-10 relative">
//             {/* Close Button */}
//             <button
//               onClick={() => setSelectedFacility(null)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
//             >
//               &times;
//             </button>

//             {/* Icon */}
//             <div className="flex justify-center mb-4">{selectedFacility.icon}</div>

//             {/* Title */}
//             <h3 className="text-2xl font-bold text-gray-800 text-center">
//               {selectedFacility.title}
//             </h3>

//             {/* Details */}
//             <p className="text-gray-600 mt-4 text-center">
//               {selectedFacility.details}
//             </p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

import { div } from "framer-motion/client";
import React, { useState } from "react";
import { FaWifi, FaUtensils, FaShieldAlt, FaTv, FaBroom, FaMapMarkerAlt } from "react-icons/fa";

export default function Facilities() {
  const facilities = [
    {
      icon: <FaWifi className="text-blue-500 text-4xl" />,
      title: "Free High-Speed WiFi",
      description: "Stay connected 24/7 with our fast and reliable internet throughout the hostel premises.",
      details: "We provide unlimited high-speed WiFi with no extra cost. Perfect for online classes, work-from-home, or binge-watching your favorite shows.",
    },
    {
      icon: <FaUtensils className="text-yellow-500 text-4xl" />,
      title: "Complimentary Meals",
      description: "Enjoy freshly cooked meals with a variety of options every day.",
      details: "Our kitchen serves breakfast, lunch, and dinner with a rotating menu to keep your taste buds happy.",
    },
    {
      icon: <FaShieldAlt className="text-green-500 text-4xl" />,
      title: "24/7 Security",
      description: "Your safety is our top priority with round-the-clock surveillance.",
      details: "Security guards, CCTV cameras, and biometric access ensure your safety at all times.",
    },
    {
      icon: <FaTv className="text-purple-500 text-4xl" />,
      title: "Entertainment Lounge",
      description: "Relax and enjoy movies, games, and fun activities in our common lounge.",
      details: "Includes a big-screen TV, gaming consoles, and a mini library for leisure time.",
    },
    {
      icon: <FaBroom className="text-pink-500 text-4xl" />,
      title: "Daily Housekeeping",
      description: "Clean rooms every day for a fresh and tidy stay.",
      details: "Our housekeeping staff ensures your rooms are spotless and hygienic daily.",
    },
    {
      icon: <FaMapMarkerAlt className="text-red-500 text-4xl" />,
      title: "Prime Location",
      description: "Easily accessible with shops, cafes, and transport nearby.",
      details: "Located in the heart of the city with easy access to malls, public transport, and tourist attractions.",
    },
  ];

  const [selectedFacility, setSelectedFacility] = useState(null);

  return (
    <section id="facilities" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Hostel Facilities
        </h2>
        <p className="text-gray-600 text-center mt-3 mb-10 max-w-2xl mx-auto">
          We provide world-class facilities to make your stay comfortable, safe, and enjoyable.
        </p>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              onClick={() => setSelectedFacility(facility)}
              className="cursor-pointer bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">{facility.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{facility.title}</h3>
              <p className="text-gray-600 text-sm">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSelectedFacility(null)}
          ></div>

          {/* Modal Box */}
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full z-10 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedFacility(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-4">{selectedFacility.icon}</div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-800 text-center">
              {selectedFacility.title}
            </h3>

            {/* Details */}
            <p className="text-gray-600 mt-4 text-center mb-4">
              {selectedFacility.details}
            </p>

            {/* Map for Prime Location */}
            {selectedFacility.title === "Prime Location" && (
              <div className="mt-4">
                <iframe
                  width="100%"
                  height="250"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27222.267776562836!2d74.40364982322384!3d31.475142008938203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1755263274417!5m2!1sen!2s"}
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
