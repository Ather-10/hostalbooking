import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import React,{useState} from "react";

export default function Contact() {
   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent actual form submission
    setShowAlert(true); // Show alert
    setName(""); // Optional: clear fields
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Have questions or need assistance? We’re here to help you 24/7.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 container mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        {/* Contact Information */}
        <div className="space-y-6">
          <ContactInfo 
            icon={<FaPhoneAlt />} 
            title="Phone" 
            detail="+92 300 1234567" 
            link="tel:+923001234567" 
          />
          <ContactInfo 
            icon={<FaEnvelope />} 
            title="Email" 
            detail="support@hostelbooking.com" 
            link="mailto:support@hostelbooking.com" 
          />
          <ContactInfo 
            icon={<FaMapMarkerAlt />} 
            title="Address" 
            detail="123 Hostel Street, Lahore, Pakistan" 
          />
          
          {/* WhatsApp Contact */}
          <a
            href="https://wa.me/923001234567?text=Hello!%20I%20want%20to%20book%20a%20room."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white py-3 px-5 rounded-lg shadow-lg transition duration-300"
          >
            <FaWhatsapp className="text-2xl" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Contact Form */}
        <form  onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md space-y-4">
          <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
          <input
           onChange={(e) => setName(e.target.value)}
           value={name}
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
           onChange={(e) => setEmail(e.target.value)}
           value={email}
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <textarea
           onChange={(e) => setMessage(e.target.value)}
           value={message}
            placeholder="Your Message"
            rows="5"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Send Message
          </button>
        </form>
                 {/* Centered Alert */}
              {showAlert && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="bg-green-100 text-green-500 px-10 py-6 rounded-2xl shadow-2xl text-center w-130 h-50 text-3xl font-semibold flex items-center justify-center">
                    Message sent successfully!
                  </div>
                </div>
              )}


      </section>
    </div>
  );
}

function ContactInfo({ icon, title, detail, link }) {
  const content = (
    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="text-green-500 text-2xl">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{detail}</p>
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
