import React from 'react'
import LoginForm from '../Components/LoginForm'
import Template from '../Components/Template'
import loginImg from '../assets/login.png'
const Login = ({setisLoggedIn}) => {
  return (
    <Template
        title="Welcome Back"
        desc1="Build skills for today,tomorrow and beyond."
        desc2="Education to future-proof your country."
        image={loginImg}
        formtype="login"
        setisLoggedIn={setisLoggedIn}
    />
  )
}

export default Login