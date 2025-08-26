// import { Link } from "react-router-dom";
// import { floors } from "../utils/data";

// export default function FloorList() {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Select a Floor</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//         {floors.map(floor => (
//           <Link
//             key={floor.id}
//             to={`/rooms/floor/${floor.id}`}
//             className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-lg text-center shadow-lg"
//           >
//             {floor.name}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
import { Link } from "react-router-dom";
import { floors } from "../utils/data";

export default function FloorList() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
        🏢 Select a Floor
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {floors.map((floor) => (
          <Link
            key={floor.id}
            to={`/rooms/floor/${floor.id}`}
            className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 text-center"
          >
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"></div>

            {/* Content */}
            <span className="relative text-2xl font-semibold z-10">
              {floor.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

