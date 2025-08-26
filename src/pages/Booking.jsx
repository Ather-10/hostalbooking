import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineTrash, HiArrowLeft } from "react-icons/hi";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      navigate("/authform");
    } else {
      setUser(currentUser);
    }
  }, [navigate]);

  const handleCancelBooking = (bookingId) => {
    const updatedBookings = user.bookings.filter(b => b.id !== bookingId);
    const updatedUser = { ...user, bookings: updatedBookings };
    setUser(updatedUser);
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  if (!user) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6"
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-yellow-500 font-medium mb-6 transition-colors"
      >
        <HiArrowLeft className="text-xl" /> Back
      </button>

      {/* Profile Header
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome, {user.name}</h1>
        <p className="text-gray-600">Email: {user.email}</p>
      </div> */}

      {/* Bookings */}
      <div id="booking" className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Your Bookings</h2>
        {user.bookings.length === 0 ? (
          <p className="text-gray-500">You have no bookings yet.</p>
        ) : (
          <div className="space-y-4">
            {user.bookings.map((booking) => (
              <div
                key={booking.id}
                className="flex justify-between items-center border border-gray-200 rounded-lg p-4"
              >
                <div>
                  <p className="font-semibold text-gray-800">{booking.room.name}</p>
                  <p className="text-gray-600 text-sm">Booked on: {booking.date}</p>
                  <p className="text-yellow-600 font-medium">Rs {booking.room.price}</p>
                </div>
                <button
                  onClick={() => handleCancelBooking(booking.id)}
                  className="text-red-500 hover:text-red-600 transition"
                >
                  <HiOutlineTrash className="text-xl" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
