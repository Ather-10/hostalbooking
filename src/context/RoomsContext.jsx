import { createContext, useContext, useEffect, useState } from "react";
import { rooms as initialRooms } from "../utils/data";

const RoomsContext = createContext();

export const RoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState(() => {
    const saved = localStorage.getItem("roomsData");
    return saved ? JSON.parse(saved) : initialRooms;
  });

  // Save rooms to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("roomsData", JSON.stringify(rooms));
  }, [rooms]);

  // Book or unbook a room
  const updateRoomBooking = (roomId, isBooked) => {
    setRooms((prev) => {
      const updatedRooms = prev.map((room) =>
        room.id === roomId ? { ...room, booked: isBooked } : room
      );
      localStorage.setItem("roomsData", JSON.stringify(updatedRooms)); // save immediately
      return updatedRooms;
    });
  };

  // Cancel booking (used in Profile)
  const cancelBooking = (roomId, userId) => {
    // 1️⃣ Update rooms state + localStorage
    setRooms((prev) => {
      const updatedRooms = prev.map((room) =>
        room.id === roomId ? { ...room, booked: false } : room
      );
      localStorage.setItem("roomsData", JSON.stringify(updatedRooms));
      return updatedRooms;
    });

    // 2️⃣ Update user data in localStorage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.id === userId) {
      const updatedUser = {
        ...currentUser,
        bookings: currentUser.bookings.filter((b) => b.room.id !== roomId),
      };
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
  };

  return (
    <RoomsContext.Provider value={{ rooms, updateRoomBooking, cancelBooking }}>
      {children}
    </RoomsContext.Provider>
  );
};

export const useRooms = () => useContext(RoomsContext);
