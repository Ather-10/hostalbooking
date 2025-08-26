import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import {RoomsProvider}  from "./context/RoomsContext";
import RouteChangeHandler from "./components/RouteChangeHandler";
import Navbar from "./components/Navbar";
import FloorList from "./pages/FloorList";
import RoomList from "./pages/RoomList";
import RoomDetails from "./pages/RoomDetails";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Facilities from "./components/Facilities";
import AuthForm from "./components/AuthForm";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Booking from "./pages/Booking";

export default function App() {
  return (
    <RoomsProvider>
    <Router>
      <RouteChangeHandler>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/rooms" element={<FloorList />} />
        <Route path="/rooms/floor/:floorId" element={<RoomList />} />
        <Route path="/room/:roomId" element={<RoomDetails />} />
        <Route path="/checkout/:roomId" element={<Checkout />} />
        <Route path="/authform" element={<AuthForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer/>
      </RouteChangeHandler>
    </Router>
    </RoomsProvider>
  );
}
