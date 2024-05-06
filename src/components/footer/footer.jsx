import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa';

const footer = () => {
  return (
    <div className='bg-[#012a4a] h-48 flex w-full items-center justify-between text-white p-2 border-t-2 border-[#ff6b35]'>
        
        <div>Logo</div>
        <div className='w-1/2 h-3/4 text-center flex flex-col justify-around items-center'>
            <p>Desarrollado </p>   
            <p className='flex w-1/2 justify-between'>Con <span><FaHeart className='text-[#f7c59f] text-2xl' /></span> por</p>
            <p>Franco Pressenda.</p>
        </div>
        <div className='flex flex-col h-full my-2 justify-around items-center  '>
            <p className='text-lg'>Contacto</p>
            <FaInstagram className='text-2xl'></FaInstagram>
            <FaFacebook className='text-2xl'></FaFacebook>
            <FaWhatsapp className='text-2xl'></FaWhatsapp>
        </div>
    </div>
)
}

export default footer