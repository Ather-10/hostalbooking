///////////////////////////////////// export default AuthForm;


// import { useState } from "react";

// export default function AuthForm() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isLogin) {
//       const savedUser = JSON.parse(localStorage.getItem("user"));
//       if (savedUser && savedUser.email === email && savedUser.password === password) {
//         localStorage.setItem("currentUser", JSON.stringify(savedUser));
//         alert("Login successful!");
//         window.location.href = "/";
//       } else {
//         alert("Invalid credentials!");
//       }
//     } else {
//       const newUser = { name, email, password, bookings: [] };
//       localStorage.setItem("user", JSON.stringify(newUser));
//       localStorage.setItem("currentUser", JSON.stringify(newUser));
//       alert("Signup successful!");
//       window.location.href = "/";
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">{isLogin ? "Login" : "Sign Up"}</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {!isLogin && (
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="border p-2 w-full rounded"
//             required
//           />
//         )}
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="border p-2 w-full rounded"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="border p-2 w-full rounded"
//           required
//         />
//         <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded w-full">
//           {isLogin ? "Login" : "Sign Up"}
//         </button>
//       </form>
//       <p
//         className="mt-4 text-blue-500 cursor-pointer"
//         onClick={() => setIsLogin(!isLogin)}
//       >
//         {isLogin ? "Create an account" : "Already have an account? Login"}
//       </p>
//     </div>
//   );
// }


import { useState } from "react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (savedUser && savedUser.email === email && savedUser.password === password) {
        localStorage.setItem("currentUser", JSON.stringify(savedUser));
        alert("Login successful!");
        window.location.href = "/";
      } else {
        alert("Invalid credentials!");
      }
    } else {
      const newUser = { name, email, password, bookings: [] };
      localStorage.setItem("user", JSON.stringify(newUser));
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      alert("Signup successful!");
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 transition-all">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900">
          {isLogin ? "Sign in to your account" : "Create a new account"}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 hover:text-indigo-500 font-medium cursor-pointer transition-colors"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </span>
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            {isLogin ? "Sign in" : "Sign up"}
          </button>
        </form>
      </div>
    </div>
  );
}
