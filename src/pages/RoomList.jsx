import { useParams, Link, useNavigate } from "react-router-dom";
import { floors } from "../utils/data";
import { HiArrowLeft } from "react-icons/hi";
import { useRooms } from "../context/RoomsContext";

export default function RoomList() {
  const { floorId } = useParams();
  const navigate = useNavigate();
  const { rooms } = useRooms();

  const selectedFloor = floors.find(f => f.id === parseInt(floorId));
  const filteredRooms = rooms.filter(room => room.floorId === parseInt(floorId));

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-700 hover:text-yellow-500 font-semibold mb-6 transition-colors"
      >
        <HiArrowLeft className="text-xl" /> Back
      </button>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-10">
        {selectedFloor?.name} - Rooms
      </h1>

      {/* Room Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredRooms.map(room => (
          <div
            key={room.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <img
              src={`/rooms/${room.id}.jpg`}
              alt={room.name}
              className="w-full h-40 object-cover bg-gray-200"
              onError={(e) => (e.target.src = "/rooms/default.jpg")}
            />

            <div className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800">{room.name}</h2>
                <span className="text-sm text-gray-700">
                  Person: {room.capacity ?? 1}
                </span>
              </div>
              <p className="text-gray-600 mt-1">💰 Price: Rs {room.price}</p>

              <span
                className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-medium ${
                  room.booked ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
                }`}
              >
                {room.booked ? "Booked" : "Available"}
              </span>

              {!room.booked && (
                <Link
                  to={`/room/${room.id}`}
                  className="block mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg text-center font-medium transition"
                >
                  Book Now
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
