// // import { Routes,Route} from 'react-router-dom';
// // import './App.css';
// // import Home from './pages/Home';
// // import Login from './pages/Login';

// // import Account from './pages/Account';
// // import Navbar from './components/Navbar';
// // import RegisterPage from './pages/SignUp';
// // import Default from './pages/Default';
// // import Forgot from './pages/Forgot';

// // function App() {

// //   const isUserSignedIn=!!localStorage.getItem('token')

// //   return (
// //     <div className="App">
// //       <Navbar/>
// //       <Routes>
// //         <Route path='/' element={<Home/>}/>
// //         <Route path='/login' element={<Login/>}/>
// //         <Route path='/signup' element={<RegisterPage/>}/>
// //         {isUserSignedIn && <Route path='/account' element={<Account/>}/>}
// //         <Route path="/forgot" element={<Forgot/>}></Route>
// //         <Route path='*' element={<Default/>}/>
// //       </Routes>
// //     </div>
// //   );
// // }

// // export default App;
// import { Routes, Route } from 'react-router-dom';
// import './App.css';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Account from './pages/Account';
// import Navbar from './components/Navbar';
// import RegisterPage from './pages/SignUp';
// import Default from './pages/Default';
// import Forgot from './pages/Forgot';

// function App() {
//   // Check if token exists in localStorage
//   const isUserSignedIn = !!localStorage.getItem('token');

//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/signup' element={<RegisterPage />} />
//         {isUserSignedIn && <Route path='/account' element={<Account />} />}
//         <Route path="/forgot" element={<Forgot />} />
//         <Route path='*' element={<Default />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/SignUp";
import Default from "./pages/Default";
import Forgot from "./pages/Forgot";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import ResetPassword from "./pages/ResetPassword";

function App() {
  // Check if token exists in localStorage
  const isUserSignedIn = !!localStorage.getItem("token");

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {isUserSignedIn && <Route path="/account" element={<Account />} />}
        <Route path="/forgot" element={<Forgot />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;
