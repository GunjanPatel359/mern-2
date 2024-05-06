// import React from 'react'
import { useNavigate } from "react-router-dom";
import ShopCreate from "../components/Shop/ShopCreate"
import { useSelector } from "react-redux";
import { useEffect } from "react";
const ShopCreatePage = () => {
  const navigate=useNavigate()
  const {isSeller}=useSelector((state)=>state.seller);
  // const sellerstate=useSelector((state)=>state.seller);
  // const isSeller = sellerstate?.isSeller ?? false;
  // const seller=sellerstate?.seller??"";
  useEffect(()=>{
    if(isSeller === true){
      navigate(`/dashboard`)
    }
  })
  return (
    <div >
      <ShopCreate />
    </div>
  )
}

export default ShopCreatePage
