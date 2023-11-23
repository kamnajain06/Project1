import React from 'react'
import logo from '../assets/Logo.svg'
import {Link} from 'react-router-dom'
import toast from 'react-hot-toast';
const NavBar = (props) => {
    let isLoggedIn=props.isLoggedIn;
    let setisLoggedIn=props.setisLoggedIn;
  return (
    <div className='flex justify-evenly '>
        <Link to="/">
        <img className="m-[20px]" src={logo} alt="Logo" width={160} height={32} loading="lazy"></img>
        </Link>
        <nav className='flex gap-10 m-[20px]'>
            <ul className='flex gap-5 ml-[50px] text-lg'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="#">About</Link>
                </li>
                <li>
                    <Link to="#">Contact</Link>
                </li>
            </ul>
            <div className='flex gap-3 ' >
                { !isLoggedIn &&  
                <Link to="/login">
                    <button className='shadow-2 w-[70px]  px-[10px] pb-[6px] shadow-sm shadow-white bg-gray-950'>
                        Login
                    </button>
                </Link>
                }
                { !isLoggedIn && 
                    <Link to="/Signup">
                    <button className='shadow-2   px-[10px] w-[100px] pb-[6px] shadow-sm shadow-white bg-gray-950'>
                        Sign Up
                    </button>
                </Link>
                }
                { isLoggedIn &&
                <Link to="/">
                    <button className='shadow-2  px-[10px] shadow-sm shadow-white bg-gray-950' onClick={()=>{
                        setisLoggedIn(false)
                        toast.success("Logged Out")
                    }}>
                            Log Out
                    </button>
                </Link>
                }
                { isLoggedIn &&
                <Link to="/Dashboard">
                    <button className='shadow-2  px-[10px] shadow-sm shadow-white bg-gray-950'>
                        Dashboard
                    </button>
                </Link>
                }
            
            </div>
        </nav>
    </div>
  )
}

export default NavBar