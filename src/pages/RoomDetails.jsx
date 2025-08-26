import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi";
import { useState } from "react";
import { useRooms } from "../context/RoomsContext";

export default function RoomDetails() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { rooms } = useRooms();
  const room = rooms.find((r) => r.id === parseInt(roomId));
  const [mainImage, setMainImage] = useState(`/images/${room?.id}.jpg`);

  if (!room) {
    return <p className="text-center text-red-500 mt-10">Room not found</p>;
  }

  const handleBooking = () => {
    // Ab status yaha update nahi hoga
    navigate(`/checkout/${room.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-4 sm:p-8"
    >
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-yellow-500 font-medium mb-6 transition-colors"
      >
        <HiArrowLeft className="text-xl" /> Back
      </button>

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* LEFT */}
        <div className="relative bg-black flex items-center justify-center">
          <img
            src={mainImage}
            alt={room.name}
            className="w-full h-72 sm:h-96 md:h-full object-cover transition-all duration-500"
          />
          <div className="absolute bottom-4 left-4 flex space-x-3">
            {[0, 1, 2].map((num, idx) => {
              const thumbSrc =
                num === 0
                  ? `/images/${room.id}.jpg`
                  : `/images/${room.id}-${num}.jpg`;
              return (
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  key={idx}
                  src={thumbSrc}
                  alt={`Thumbnail ${num}`}
                  onClick={() => setMainImage(thumbSrc)}
                  className={`w-16 h-16 object-cover rounded-lg border-2 cursor-pointer transition ${
                    mainImage === thumbSrc
                      ? "border-yellow-500 ring-2 ring-yellow-300"
                      : "border-transparent"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{room.name}</h1>
            <p className="text-gray-600 mt-2 text-lg">
              Experience luxury and comfort in this exclusive room.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-gray-800">Facilities</h3>
            <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
              {room.facilities.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-yellow-500">✔</span> {f}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-2">
              <p className="text-2xl font-bold text-yellow-500">
                Rs {room.price} / Month
              </p>
              <span
                className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${
                  room.booked
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {room.booked ? "Booked" : "Available"}
              </span>
            </div>
          </div>

          {!room.booked ? (
            <button
              onClick={handleBooking}
              className="mt-8 inline-block bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-xl shadow-md transition font-semibold text-center"
            >
              Book Now
            </button>
          ) : (
            <p className="mt-8 text-red-500 font-semibold">
              This room is currently booked.
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
