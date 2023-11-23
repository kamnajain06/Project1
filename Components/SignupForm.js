import React from 'react'
import {useState} from 'react';
import toast from 'react-hot-toast';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Navigate, useNavigate } from 'react-router-dom';
const SignupForm = ({setisLoggedIn}) => {
    const [formData,setformData]=useState({firstName:"", lastName:"",email:"",password:"", confirmPassword:""})
    const [showPassword,setshowPassword]=useState(false);
    const [showConfirmPassword,setshowConfirmPassword]=useState(false);
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
        if(formData.password != formData.confirmPassword){
            return toast.error("Password mismatched!");
        }else{
            navigate('/dashboard');
            setisLoggedIn(true);
            toast.success("Account Created Succesfully");
            console.log(formData)
        }
    }
  return (
    <div >
        <div className='bg-gray-900 w-[180px] border-box rounded-2xl text-[13px] text-gray-200 px-[10px] py-[2px] mb-[20px]'>
            <button className=' mr-[15px] hover:bg-gray-950 p-[8px] rounded-2xl'>Student</button>
            <button className=' hover:bg-gray-950  p-[8px] rounded-2xl'>Instructor</button>
        </div>
        <form onSubmit={submitHandler}>
            <div className='flex gap-4'>
            <div>
            <label className='text-xs'>First Name <sup className='text-red-700'>*</sup>
                <br></br>
                <input
                    required
                    type="text"
                    name="firstName"
                    onChange={changeHandler}
                    placeholder="Enter First Name"
                    value={formData.firstName}
                    className='w-[150px] h-[40px] mb-[15px] p-[15px] rounded-md bg-gray-950 text-white border-2 border-blue-400'>
                </input>
            </label>
            </div>
            <div>
            <label className='text-xs '>Last Name <sup className='text-red-700'>*</sup>
                <br></br>
                <input
                    required
                    type="text"
                    name="lastName"
                    onChange={changeHandler}
                    placeholder="Enter Last Name"
                    value={formData.lastName}
                    className='w-[150px] h-[40px] mb-[15px] p-[15px] rounded-md bg-gray-950 text-white border-2 border-blue-400'>
                </input>
            </label>
            </div>
            </div>
            
            <label className='text-xs '>Email <sup className='text-red-700'>*</sup>
            <br></br>
                <input
                    required
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    placeholder="Enter your Email"
                    value={formData.email}
                    className='w-[310px] h-[40px] mb-[15px] p-[15px] rounded-md bg-gray-950 text-white border-2 border-blue-400'>
                </input>
            </label>
            <div className='flex gap-4'>
                <div className='relative'>
                <label className='text-xs '>Create Password<sup className='text-red-700'>*</sup>
                <br></br>
                <input
                    required
                    type={showPassword?("text"):("password")}
                    name="password"
                    onChange={changeHandler}
                    placeholder="Enter your Password"
                    value={formData.password}
                    className='w-[150px] h-[40px] mb-[15px] p-[10px] rounded-md bg-gray-950 text-white border-2 border-blue-400'>
                </input>
                <span className="absolute bottom-7 right-1" onClick={()=>setshowPassword((prev)=>!prev)}>
                    {
                        showPassword?(<AiFillEyeInvisible></AiFillEyeInvisible>):(<AiFillEye></AiFillEye>)
                    }
                </span>
            </label>
            </div>
            <div className='relative'>
            <label className='text-xs '>Confirm Password<sup className='text-red-700'>*</sup>
            <br></br>
                <input
                    required
                    type={showConfirmPassword?("text"):("password")}
                    name="confirmPassword"
                    onChange={changeHandler}
                    placeholder="Enter your Password"
                    value={formData.confirmPassword}
                    className='w-[150px] h-[40px] mb-[15px] p-[10px] rounded-md bg-gray-950 text-white border-2 border-blue-400'>
                </input>
                <span className="absolute bottom-7 right-1" onClick={()=>setshowConfirmPassword((prev)=>!prev)}>
                    {
                        showConfirmPassword?(<AiFillEyeInvisible></AiFillEyeInvisible>):(<AiFillEye></AiFillEye>)
                    }
                </span>
            </label>
            </div>
            </div>
            <button className='flex justify-center items-center mt-[40px] bg-yellow-400 w-[310px] rounded-md text-black'>Create Account</button>
        </form>
    </div>
  )
}

export default SignupForm
