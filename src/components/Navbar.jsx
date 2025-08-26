// import { Link } from "react-router-dom";
// import { Component } from "react";

// export default function Navbar() {
//   return (
//     <header className="bg-white shadow-md">
//       <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
//         <div className="flex lg:flex-1 text-[20px] font-bold">
//           <Link to="/" className="-m-1.5 p-1.5">
//             <span className="sr-only">Twailwind Css</span>
//             <h1 className="font-bold">Hostal Booking</h1>
//           </Link>
//         </div>
        
//         <div className="flex lg:hidden">
//           <button 
//             type="button" 
//             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//             onClick={() => document.getElementById('mobile-menu').showModal()}
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg 
//               viewBox="0 0 24 24" 
//               fill="none" 
//               stroke="currentColor" 
//               strokeWidth="1.5" 
//               aria-hidden="true" 
//               className="h-6 w-6"
//             >
//               <path 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
//               />
//             </svg>
//           </button>
//         </div>
        
//         <div className="hidden lg:flex lg:gap-x-12">
//           <Link to="/" className="text-sm font-semibold leading-6 text-black hover:text-gray-900">Home</Link>
//           <Link to="/rooms" className="text-sm font-semibold leading-6 text-black hover:text-gray-900">Rooms</Link>
//           {/* <Link to="/facilities " className="text-sm font-semibold leading-6 text-black hover:text-gray-900">Facilities</Link> */}
//           <a href="/#facilities " className="text-sm font-semibold leading-6 text-black hover:text-gray-900">Facilities</a>
//           <Link to="about" className="text-sm font-semibold leading-6 text-black hover:text-gray-900">About</Link>
//           <Link to="contact" className="text-sm font-semibold leading-6 text-black hover:text-gray-900">Contact</Link>
//         </div>
        
//         <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//           <Link to="/authform" className="text-sm font-semibold leading-6 text-gray-900">
//             Log in <span aria-hidden="true">&rarr;</span>
//           </Link>
//         </div>
//       </nav>

//       {/* Mobile menu dialog */}
//       <dialog id="mobile-menu" className="backdrop:bg-transparent lg:hidden">
//         <div tabIndex="0" className="fixed inset-0 focus:outline-none">
//           <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//             <div className="flex items-center justify-between font-bold ">
//               <Link to="#" className="-m-1.5 p-1.5">
//                 <span className="sr-only">Your Company</span>
//                 <b> <h1>DevMatch</h1></b>
//               </Link>
//               <button 
//                 type="button" 
//                 className="-m-2.5 rounded-md p-2.5 text-gray-700"
//                 onClick={() => document.getElementById('mobile-menu').close()}
//               >
//                 <span className="sr-only">Close menu</span>
//                 <svg 
//                   viewBox="0 0 24 24" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   strokeWidth="1.5" 
//                   aria-hidden="true" 
//                   className="h-6 w-6"
//                 >
//                   <path 
//                     strokeLinecap="round" 
//                     strokeLinejoin="round" 
//                     d="M6 18L18 6M6 6l12 12" 
//                   />
//                 </svg>
//               </button>
//             </div>
            
//             <div className="mt-6 flow-root">
//               <div className="-my-6 divide-y divide-gray-500/10">
//                 <div className="space-y-2 py-6">
//                   <Link
//                     to="/"
//                     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                   >
//                     Home
//                   </Link>
//                   <Link
//                     to="/rooms"
//                     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                   >
//                     Rooms
//                   </Link>
//                    {/* <Link
//                     to="/facilities"
//                     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                   >
//                  Facilities 
//                   </Link> */}
//                   <a
//                     href="/#facilities"
//                     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                   >
//                  Facilities 
//                   </a>
//                   <Link
//                     to="about"
//                     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                   >
//                   About
//                   </Link>
//                   <Link
//                     to="contact"
//                     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                   >
//                     Contact
//                   </Link>
//                 </div>
//                 <div className="py-6">
//                   <Link
//                     to="/authform"
//                     className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                   >
//                     Log in
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </dialog>
//     </header>
//   );
// }



import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="bg-white shadow-md relative">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1 text-[20px] font-bold">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Twailwind Css</span>
            <h1 className="font-bold">Hostal Booking</h1>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => document.getElementById("mobile-menu").showModal()}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Desktop nav links */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm font-semibold leading-6 text-black hover:text-gray-900">
            Home
          </Link>
          <Link to="/rooms" className="text-sm font-semibold leading-6 text-black hover:text-gray-900">
            Rooms
          </Link>
          <a href="/#facilities" className="text-sm font-semibold leading-6 text-black hover:text-gray-900">
            Facilities
          </a>
          <Link to="about" className="text-sm font-semibold leading-6 text-black hover:text-gray-900">
            About
          </Link>
          <Link to="contact" className="text-sm font-semibold leading-6 text-black hover:text-gray-900">
            Contact
          </Link>
        </div>

        {/* Right side buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end relative">
          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                👤{currentUser.name} ▼
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/booking"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Bookings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-4">
              <Link to="/authform" className="text-sm font-semibold leading-6 text-gray-900">
                Login
                <span aria-hidden="true">&rarr;</span>
              </Link>
              {/* <Link to="/signup" className="text-sm font-semibold leading-6 text-blue-600">
                Signup
              </Link> */}
            </div>
          )}
        </div>
      </nav>

      {/* Mobile menu dialog */}
      <dialog id="mobile-menu" className="backdrop:bg-transparent lg:hidden">
        <div tabIndex="0" className="fixed inset-0 focus:outline-none">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between font-bold">
              <Link to="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <b>
                  <h1>DevMatch</h1>
                </b>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => document.getElementById("mobile-menu").close()}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Home
                  </Link>
                  <Link to="/rooms" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Rooms
                  </Link>
                  <a href="/#facilities" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Facilities
                  </a>
                  <Link to="about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    About
                  </Link>
                  <Link to="contact" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Contact
                  </Link>
                </div>
                <div className="py-6">
                  {currentUser ? (
                    <>
                      <Link to="/profile" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-yellow-500 hover:bg-gray-50">
                        Profile
                      </Link>
                      <Link to="/booking" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-yellow-500 hover:bg-gray-50">
                        My Bookings
                      </Link>
                      <button onClick={handleLogout} className="-mx-3 block w-full text-left rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-red-600 hover:bg-gray-50">
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/authform" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Login
                      </Link>
                      {/* <Link to="/signup" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-blue-600 hover:bg-gray-50">
                        Signup
                      </Link> */}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </header>
  );
}
