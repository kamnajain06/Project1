import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import {useState} from 'react';
function App() {
  const [isLoggedIn,setisLoggedIn]=useState(false);
  return (
    <div className='bg-black text-white'>
      <NavBar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Login" element={<Login setisLoggedIn={setisLoggedIn}></Login>}></Route>
        <Route path="/Signup" element={<Signup setisLoggedIn={setisLoggedIn}></Signup>}></Route>
        <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
