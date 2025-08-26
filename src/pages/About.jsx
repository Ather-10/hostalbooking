import { FaBed, FaWifi, FaUtensils, FaShieldAlt, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Hostel Booking Platform</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Your go-to destination for finding comfortable, affordable, and secure hostel rooms — 
            with just a few clicks.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 container mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/hostel-story.jpg"
            alt="Our Story"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded with the vision of simplifying hostel bookings, we created this platform to 
              help students, travelers, and working professionals find the perfect stay without 
              the hassle of endless phone calls or unverified listings.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we’re proud to serve thousands of happy customers, offering a reliable, 
              user-friendly, and transparent booking experience.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-indigo-50 p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To make hostel booking seamless, accessible, and trustworthy for everyone, anywhere.
            </p>
          </div>
          <div className="bg-purple-50 p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-purple-700 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To become the leading digital hostel marketplace, connecting people to the best stays 
              with ease and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose Us?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <FeatureCard icon={<FaBed />} title="Comfortable Rooms" desc="Clean, cozy, and well-furnished rooms for every budget." />
            <FeatureCard icon={<FaWifi />} title="Free Wi-Fi" desc="Stay connected with high-speed internet in all our hostels." />
            <FeatureCard icon={<FaUtensils />} title="Food Services" desc="Nutritious meals and snacks available around the clock." />
            <FeatureCard icon={<FaShieldAlt />} title="Secure Stay" desc="24/7 security and safety measures to ensure peace of mind." />
            <FeatureCard icon={<FaUsers />} title="Friendly Community" desc="Meet new people and create unforgettable memories." />
            <FeatureCard icon={<FaMapMarkerAlt />} title="Prime Locations" desc="Close to schools, colleges, and public transport." />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Perfect Stay?</h2>
          <p className="mb-6">Find your ideal hostel today and make your stay stress-free.</p>
          <a
            href="/facilities"
            className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold shadow hover:shadow-lg transition duration-300"
          >
            Explore Facilities
          </a>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
      <div className="text-4xl text-indigo-600 mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
