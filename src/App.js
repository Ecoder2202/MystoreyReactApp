import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./component/Navbar/Navbar";
import About from "./component/Pages/About";
import Contact from "./component/Pages/Contact";
import Login from "./component/Pages/Login";
import SignUp from "./component/Pages/SignUp";
import Stories from "./component/Pages/Stories";
import Registrations from "./component/Pages/Registrations";



function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
<Route path='/' element={<About/>} />
<Route path='stories' element={<Stories/>} />
<Route path='contacts' element={<Contact />}/>
<Route path='login' element={<Login />}/>
<Route path='signup' element={<SignUp />}/>
<Route path='register' element={<Registrations />}/>


    </Routes>

    </Router>
    </>
  );
}

export default App;
