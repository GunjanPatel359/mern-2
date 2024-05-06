import { useNavigate } from "react-router-dom";
import Signup from "../components/Signup/Signup.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SignupPage = () => {
  const navigate=useNavigate()
  const {isAuthenticated}=useSelector((state)=>state.user);
  useEffect(()=>{
    if(isAuthenticated === true){
      navigate("/")
    }
  })
  return (
    <div>
        <Signup />
    </div>
  )
}

export default SignupPage