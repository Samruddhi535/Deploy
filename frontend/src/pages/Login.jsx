// // // import React,{useState,useEffect} from 'react'
// // // import axios from 'axios';
// // // import { useNavigate } from 'react-router-dom';

// // // function Login() {

// // //   const [users,setUsers]=useState([]);
// // //   const [username,setUsername]=useState('');
// // //   const [password,setPassword]=useState('');
// // //   const navigate=useNavigate();

// // //   useEffect(()=>{
// // //     fetchUsers();
// // //   },[])
// // //   const fetchUsers=()=>{
// // //     axios.get('http://localhost:3001/register')
// // //     .then((res)=>{
// // //       // console.log(res.data);
// // //     })
// // //   }

// // //   const handleLogin=async(event)=>{
// // //     event.preventDefault();
// // //     try{
// // //       const response=await axios.post('http://localhost:3001/login',{username,password})
// // //       const token=response.data.token
// // //       setUsername('');
// // //       setPassword('');
// // //       fetchUsers();
// // //       navigate('/account');
// // //       window.location.reload();
// // //       console.log(username);
// // //       localStorage.setItem('token',token)
// // //     }catch(error){
// // //       console.log("Login error");
// // //     }
// // //   }

// // //   return (
// // //     <div className='w-full h-screen flex'>
// // //         <div className='w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center'>
// // //           <form className='text-center border rounded-lg w-[600px] h-[400px] p-9' onSubmit={handleLogin}>

// // //             <label>Username</label>
// // //             <br/>
// // //             <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2' type="text" placeholder='Username' value={username} onChange={(event)=>setUsername(event.target.value)}/>
// // //             <br/>
// // //             <br/>
// // //             <label>Password</label>
// // //             <br/>
// // //             <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2' type="password" placeholder='password' value={password} onChange={(event)=>setPassword(event.target.value)}/>
// // //             <br/>
// // //             <br/>
// // //             <button className='w-[200px] h-[50px] border hover:bg-teal-900' type='submit'>Login</button>
// // //           </form>
// // //         </div>
// // //         <div className='w-[50%] h-[100%] flex justify-center items-center bg-teal-800'>
// // //           <h2 className='text-3xl text-white'>LOGIN</h2>
// // //         </div>
// // //       </div>
// // //   )
// // // }

// // // export default Login
// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";

// // const LoginPage = () => {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleLogin = (event) => {
// //     event.preventDefault();

// //     // Log the username and password as an object
// //     console.log({
// //       username,
// //       password,
// //     });

// //     // Reset the form fields
// //     setUsername("");
// //     setPassword("");
// //   };

// //   return (
// //     <div className="flex items-center justify-center h-[90vh]">
// //       <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-full max-w-sm relative">
// //         <h2 className="text-2xl font-bold mb-6">Login</h2>
// //         <form onSubmit={handleLogin}>
// //           <div className="relative mb-4">
// //             <i className="fa fa-user absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="Username"
// //               value={username}
// //               onChange={(e) => setUsername(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-6">
// //             <i className="fa fa-lock absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="password"
// //               placeholder="Password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <button
// //             type="submit"
// //             className="w-full bg-gradient-to-r from-teal-400 to-yellow-400 text-black font-bold py-3 rounded-full hover:from-yellow-400 hover:to-teal-400 transition"
// //           >
// //             LOGIN
// //           </button>
// //           <div className="flex justify-between mt-4 text-sm text-teal-400">
// //             <Link to="/forgot" className="hover:underline">
// //               Forgot Password?
// //             </Link>
// //             <Link to="/signup" className="hover:underline">
// //               Register
// //             </Link>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginPage;
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     try {
//       // Send login request to the backend
//       const response = await axios.post("http://localhost:3001/login", { username, password });
//       console.log(response);  // Log the entire response to check its structure

//       // Store the token in localStorage
//       const token = response.data.token;
//       localStorage.setItem("token", token);

//       // Reset the form fields
//       setUsername("");
//       setPassword("");

//       // Redirect user to the account page
//       navigate("/account");

//     } catch (error) {
//       console.log("Login failed:", error);
//       alert("Login failed. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-[90vh]">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-full max-w-sm relative">
//         <h2 className="text-2xl font-bold mb-6">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="relative mb-4">
//             <i className="fa fa-user absolute left-3 top-3 text-gray-400"></i>
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
//               required
//             />
//           </div>
//           <div className="relative mb-6">
//             <i className="fa fa-lock absolute left-3 top-3 text-gray-400"></i>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-teal-400 to-yellow-400 text-black font-bold py-3 rounded-full hover:from-yellow-400 hover:to-teal-400 transition"
//           >
//             LOGIN
//           </button>
//           <div className="flex justify-between mt-4 text-sm text-teal-400">
//             <Link to="/forgot" className="hover:underline">
//               Forgot Password?
//             </Link>
//             <Link to="/signup" className="hover:underline">
//               Register
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const LoginPage = () => {
//   const [email, setEmail] = useState(""); // State to manage email
//   const [password, setPassword] = useState(""); // State to manage password
//   const navigate = useNavigate();

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     try {
//       // Send login request to the backend with email and password
//       const response = await axios.post("http://localhost:6000/login", { email, password });
//       console.log(response);  // Log the entire response to check its structure

//       // Check if response contains a token and store it in localStorage
//       const token = response.data.token;
//       localStorage.setItem("token", token);

//       // Clear the input fields after successful login
//       setEmail("");
//       setPassword("");

//       // Redirect to the account page after successful login
//       navigate("/account");

//     } catch (error) {
//       console.log("Login failed:", error);
//       alert("Login failed. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-[90vh]">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-full max-w-sm relative">
//         <h2 className="text-2xl font-bold mb-6">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="relative mb-4">
//             <i className="fa fa-user absolute left-3 top-3 text-gray-400"></i>
//             <input
//               type="email" // Input type is email for proper validation
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)} // Update email state
//               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
//               required
//             />
//           </div>
//           <div className="relative mb-6">
//             <i className="fa fa-lock absolute left-3 top-3 text-gray-400"></i>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)} // Update password state
//               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-teal-400 to-yellow-400 text-black font-bold py-3 rounded-full hover:from-yellow-400 hover:to-teal-400 transition"
//           >
//             LOGIN
//           </button>
//           <div className="flex justify-between mt-4 text-sm text-teal-400">
//             <Link to="/forgot" className="hover:underline">
//               Forgot Password?
//             </Link>
//             <Link to="/signup" className="hover:underline">
//               Register
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:4000/signin", {
//         email,
//         password,
//       });

//       const token = response.data.data.token; // Ensure you access the token from the correct path
//       localStorage.setItem("token", token);

//       // Clear input fields
//       setEmail("");
//       setPassword("");

//       // Navigate to the account page
//       navigate("/account");
//     } catch (error) {
//       console.error(
//         "Login failed:",
//         error.response?.data?.message || error.message
//       );
//       alert(
//         error.response?.data?.message || "An error occurred. Please try again."
//       );
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-[90vh]">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-full max-w-sm relative">
//         <h2 className="text-2xl font-bold mb-6">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="relative mb-4">
//             <i className="fa fa-user absolute left-3 top-3 text-gray-400"></i>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
//               required
//             />
//           </div>
//           <div className="relative mb-6">
//             <i className="fa fa-lock absolute left-3 top-3 text-gray-400"></i>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-teal-400 to-yellow-400 text-black font-bold py-3 rounded-full hover:from-yellow-400 hover:to-teal-400 transition"
//           >
//             LOGIN
//           </button>
//           <div className="flex justify-between mt-4 text-sm text-teal-400">
//             <Link to="/forgot" className="hover:underline">
//               Forgot Password?
//             </Link>
//             <Link to="/signup" className="hover:underline">
//               Register
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:4000/signin", {
//         email,
//         password,
//       });

//       const token = response.data.data.token; // Ensure you access the token from the correct path
//       localStorage.setItem("token", token);

//       // Clear input fields
//       setEmail("");
//       setPassword("");

//       // Navigate to the account page
//       navigate("/account");
//     } catch (error) {
//       console.error(
//         "Login failed:",
//         error.response?.data?.message || error.message
//       );
//       alert(
//         error.response?.data?.message || "An error occurred. Please try again."
//       );
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black">
//       <form
//         onSubmit={handleLogin}
//         className="relative w-[400px] h-[470px] bg-black rounded-[50px_5px] flex items-center justify-center overflow-hidden mt-[70px]"
//       >
//         <div className="absolute w-[170%] h-[170%] bg-[conic-gradient(transparent,transparent,transparent,#3cbdb1)] animate-[rotate_border_6s_linear_infinite]"></div>
//         <div className="absolute w-[170%] h-[170%] bg-[conic-gradient(transparent,transparent,transparent,#c8a217)] animate-[rotate_border_6s_linear_infinite] animate-delay-[-3s]"></div>

//         <div className="absolute bg-black rounded-[50px_5px] inset-[5px] p-[50px_40px] z-10 text-white">
//           <h2 className="text-2xl font-semibold text-center">Login</h2>

//           <div className="mt-[40px] relative flex items-center justify-start">
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-[95%] h-[30px] bg-transparent border-b border-white outline-none text-white text-[20px] pl-[10px]"
//               autoComplete="off"
//               required
//             />
//           </div>

//           <div className="mt-[40px] relative flex items-center justify-start">
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-[95%] h-[30px] bg-transparent border-b border-white outline-none text-white text-[20px] pl-[10px]"
//               autoComplete="off"
//               required
//             />
//           </div>

//           <div className="relative mt-[70px] w-[300px] h-[40px] transition-[1s]">
//             <button
//               type="submit"
//               className="absolute w-full h-full text-white bg-black border border-[#c8a217] rounded-[50px] flex justify-center items-center text-[22px] tracking-[2px] cursor-pointer hover:bg-[#c8a217]"
//             >
//               LOGIN
//             </button>
//           </div>

//           <div className="mt-[30px] flex justify-between">
//             <Link to="/forgot-password" className="text-[#3cbdb1] text-[18px]">
//               Forgot Password?
//             </Link>
//             <Link to="/signup" className="text-[#3cbdb1] text-[18px]">
//               Register
//             </Link>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/signin", {
        email,
        password,
      });

      const token = response.data.data.token; // Ensure you access the token from the correct path
      localStorage.setItem("token", token);

      // Clear input fields
      setEmail("");
      setPassword("");

      // Navigate to the account page
      navigate("/account");
    } catch (error) {
      console.error(
        "Login failed:",
        error.response?.data?.message || error.message
      );
      alert(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form
        onSubmit={handleLogin}
        className="relative w-[400px] h-[470px] bg-black rounded-[50px_5px] flex items-center justify-center overflow-hidden mt-[20px]"
      >
        <div className="absolute w-[130%] h-[130%] bg-[conic-gradient(transparent,transparent,transparent,#3cbdb1)] animate-rotate_border"></div>
        <div className="absolute w-[130%] h-[130%] bg-[conic-gradient(transparent,transparent,transparent,#c8a217)] animate-rotate_border animate-delay-[-3s]"></div>

        <div className="absolute bg-black rounded-[50px_5px] inset-[5px] p-[50px_40px] z-10 text-white">
          <h2 className="text-2xl font-semibold text-center">Login</h2>

          <div className="mt-[40px] relative flex items-center justify-start">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[95%] h-[30px] bg-transparent border-b border-white outline-none text-white text-[20px] pl-[10px]"
              autoComplete="off"
              required
            />
          </div>

          <div className="mt-[40px] relative flex items-center justify-start">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[95%] h-[30px] bg-transparent border-b border-white outline-none text-white text-[20px] pl-[10px]"
              autoComplete="off"
              required
            />
          </div>

          <div className="relative mt-[70px] w-[300px] h-[40px] transition-[1s]">
            <button
              type="submit"
              className="absolute w-full h-full text-white bg-black border border-[#c8a217] rounded-[50px] flex justify-center items-center text-[22px] tracking-[2px] cursor-pointer hover:bg-[#c8a217]"
            >
              LOGIN
            </button>
          </div>

          <div className="mt-[30px] flex justify-between">
            <Link to="/forgot" className="text-[#3cbdb1] text-[18px]">
              Forgot Password?
            </Link>
            <Link to="/signup" className="text-[#3cbdb1] text-[18px]">
              Register
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
