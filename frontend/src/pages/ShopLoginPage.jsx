// import React from 'react'
import { useNavigate } from "react-router-dom";
import ShopLogin from "../components/Shop/ShopLogin.jsx"
import { useSelector } from "react-redux";
import { useEffect } from "react";
const ShopLoginPage = () => {
    const navigate=useNavigate()
  const {isSeller,seller}=useSelector((state)=>state.seller);
  useEffect(()=>{
    if(isSeller === true){
      navigate(`/shop/${seller._id}`)
    }
  })
  return (
    <div>
      <ShopLogin />
    </div>
  )
}

export default ShopLoginPage
