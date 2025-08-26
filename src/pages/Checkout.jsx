import { useParams, useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { motion } from "framer-motion";
import { useRooms } from "../context/RoomsContext";

export default function Checkout() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { rooms, updateRoomBooking } = useRooms();
  const room = rooms.find((r) => r.id === parseInt(roomId));

  const handleBooking = (e) => {
    e.preventDefault();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      alert("Please login first!");
      navigate("/authform");
      return;
    }

    const newBooking = {
      id: Date.now(),
      room,
      date: new Date().toLocaleString(),
    };

    currentUser.bookings = currentUser.bookings || [];
    currentUser.bookings.push(newBooking);

    // Status change yaha pe hoga
    updateRoomBooking(room.id, true);

    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    localStorage.setItem("user", JSON.stringify(currentUser));

    alert("🎉 Congrats for booking!");
    navigate("/profile");
  };

  if (!room)
    return (
      <p className="text-center text-red-500 mt-10">Room not found</p>
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-6 flex items-center justify-center"
    >
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-yellow-500 font-medium mb-6 transition-colors"
        >
          <HiArrowLeft className="text-xl" /> Back
        </button>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
          Checkout
        </h1>
        <p className="text-gray-600 mb-6">
          Booking for <span className="font-semibold">{room.name}</span>
        </p>

        {/* Booking Form */}
        <form className="space-y-4" onSubmit={handleBooking}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none transition"
            required
          />
          <input
            type="text"
            placeholder="Father Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none transition"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none transition"
            required
          />
          <select
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none transition"
            required
          >
            <option value="">Select Payment Method</option>
            <option value="jazzcash">JazzCash</option>
            <option value="easypaisa">Easypaisa</option>
            <option value="bank">Bank Transfer</option>
          </select>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-gray-800">
            <p className="text-lg font-semibold">
              Total: Rs {room.price} / Month
            </p>
            <p className="text-sm text-gray-600">
              Please ensure payment is made via your selected method before confirming.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white py-3 rounded-lg font-semibold shadow-md transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </motion.div>
  );
}
