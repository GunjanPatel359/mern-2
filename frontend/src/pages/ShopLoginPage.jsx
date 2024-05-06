// import React from 'react'
import { useNavigate } from "react-router-dom";
import ShopLogin from "../components/Shop/ShopLogin.jsx"
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ShopLoginPage = () => {
  const navigate=useNavigate() 
  const {isSeller,isLoading}=useSelector((state)=>state.seller);
  // const sellerstate=useSelector((state)=>state.seller);
  // const isSeller = sellerstate?.isSeller ?? false;
  // const seller=sellerstate?.seller??"";
  useEffect(()=>{
    if(isSeller === true){
      navigate(`/dashboard`)
    }
  },[isLoading,isSeller])
  return (
    <div>
      <ShopLogin />
    </div>
  )
}

export default ShopLoginPage
