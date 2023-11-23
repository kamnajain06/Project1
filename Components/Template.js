//Similar components of both the forms login and signup => title,2desc,2image,1button
import React from 'react'
import frame from '../assets/frame.png';
import login from '../assets/login.png';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import {FcGoogle} from 'react-icons/fc'
const Template = ({title,desc1,desc2,formtype,image,setisLoggedIn}) => {
  return (
    <div className='flex min-h-screen justify-evenly mt-[80px] '>
        <div className=''>
            <h1 className='text-3xl font-bold mb-[30px] '>{title}</h1>
            <p className='mb-[20px]'>
                <span className='text-gray-300'>{desc1}</span>
                <br></br>
                <span className='text-blue-500 italic '>{desc2}</span>
            </p>
            {
                formtype==="signup"? (<SignupForm setisLoggedIn={setisLoggedIn}></SignupForm>):(<LoginForm setisLoggedIn={setisLoggedIn}></LoginForm>)
            }
            <div className='flex justify-center items-center mt-[20px]'>
                <div className='text-gray-700 border-b-2 border-gray-700 w-[140px]'></div>
                <div className='text-gray-700 text-xs mx-1'>OR</div>
                <div className='text-gray-700 border-b-2 border-gray-700 w-[140px]'></div>
            </div>
            <div className='relative'>
                <button className='bg-black shadow-md shadow-gray-700 mt-[30px] rounded-md text-xs w-[310px] p-[6px]'>Sign in with Google</button>
                <span className='absolute right-[219px] top-[36px]'><FcGoogle className='text-md'></FcGoogle></span>
            </div>
        </div>
        <div className='relative'>
            <img src={frame}
            alt='Pattern'
            width={400}
            height={400}
            loading="lazy"
            className='absolute relative top-[20px] left-[20px]'/>
            <img src={image}
            alt='Students'
            width={400}
            height={400}
            loading="lazy"
            className='absolute top-[5px]'/>
        </div>
    </div>
  )
}

export default Template