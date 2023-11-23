import React from 'react'
import SignupForm from '../Components/SignupForm'
import signupImg from '../assets/signup.png'
import Template from '../Components/Template'
const Signup = ({setisLoggedIn}) => {
  return (
    <Template
        title="Join the millions..."
        desc1="Build skills for today,tomorrow and beyond."
        desc2="Education to future-proof your country."
        image={signupImg}
        formtype="signup"
        setisLoggedIn={setisLoggedIn}
    />
  )
}

export default Signup