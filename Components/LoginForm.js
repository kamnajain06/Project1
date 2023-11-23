import React from 'react'
import {useState} from 'react'
import toast from 'react-hot-toast'
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
const LoginForm = ({setisLoggedIn}) => {
    const [formData,setformData]=useState({email:"", password:""})
    const [showPassword,setshowPassword]=useState(false);
    const navigate=useNavigate();
    function changeHandler(event){
        setformData((prevData)=>{
            return{
                ...prevData,
                [event.target.name]:event.target.value
            }
        })
    }
    function submitHandler(event){
        event.preventDefault();
        toast.success("Logged in")
        navigate('/dashboard');
        setisLoggedIn(true);
    }  
  return (
    <form onSubmit={submitHandler}>
        <label className='text-xs '>Email Address <sup  className='text-red-700'>*</sup>
            <br></br>
            <input 
                required 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={changeHandler} 
                placeholder="Enter email address"
                className='w-[310px] h-[40px] mb-[15px] p-[15px] rounded-md bg-gray-950 text-white border-2 border-blue-400'>
            </input>
        </label>
        <br></br>
        <label className='text-xs relative  '>Password <sup  className='text-red-700 ' >*</sup>
            <br></br>
            <input 
                required
                type={showPassword?("text"):("password")}
                value={formData.password}
                onChange={changeHandler}
                name="password"
                placeholder="Enter your Password "
                className='w-[310px] h-[40px] mb-[15px] p-[15px] rounded-md bg-gray-950 text-white border-2 border-blue-400'>
            </input>
            <span className="absolute right-[20px] top-[28px] text-lg cursor-pointer" onClick={()=> setshowPassword((prev)=>!prev)} >
                {showPassword?(<AiFillEyeInvisible />):(<AiFillEye></AiFillEye>)}
            </span>
            <span className='absolute top-[60px] right-[6px]'>
                <Link to="#" className='text-blue-500'>Forgot Password ?</Link>
            </span>
        </label>
        <br></br>
        <button className='flex justify-center items-center mx-auto mt-[40px] bg-yellow-400 w-[310px] rounded-md text-black' >Sign in</button>
    </form>
  )
}


export default LoginForm