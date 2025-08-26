import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  // Images from public folder (✅ Simple path)
  const images = [
    "/images/hostel1.jpg",
    "/images/hostel2.jpg",
    "/images/hostel3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 sec
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[current]})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text & Buttons */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
          Book Your Perfect Hostel <span className="text-blue-400">Easily</span>
        </h1>
        <p className="mt-4 text-gray-200 text-lg">
          Find affordable, safe, and comfortable hostels in just a few clicks.
        </p>

        {/* Modern Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rooms" className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:scale-105 hover:bg-blue-500 transition-all duration-300" >🚀 Book Now</Link>
          {/* <button  onClick={() => navigate("/rooms")} className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:scale-105 hover:bg-blue-500 transition-all duration-300">
           🚀 Book Now
          </button> */}
          <Link to="/about" className="px-8 py-3 text-lg font-semibold text-blue-600 bg-white rounded-full shadow-lg hover:scale-105 hover:bg-gray-100 transition-all duration-300">
            📖 Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
