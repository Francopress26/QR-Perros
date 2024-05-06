import React from 'react'
import { Button } from '../ui/button';
import { FaWhatsapp } from "react-icons/fa";
import Footer from '../footer/footer.jsx';
const mascota = ({nombre,datos_extra,zona,contacto,email_contacto,imageURL,codigoQR}) => {
  return (

    <div className=" w-full h-screen ">
      <div className=' mb-4 border-b-2 flex items-center justify-center border-[#ff6b35]'>
      <img  src={imageURL} ></img>
      </div>
      <div className='flex items-center flex-col text-center border-b-2 border-[#ff6b35]'>
        <h1 className='text-3xl font-extrabold mt-2 text-[#004e89] border-2 border-[#ff6b35] rounded-lg p-4'>Hola soy {nombre}!</h1>
        <div className='mt-6 mb-4 text-lg w-3/4'>
          <h2 className='text-2xl font-bold text-[#004e89] underline decoration-[#ff6b35] mb-2'>Sobre mi:</h2>
          <p className=' text-xl'>{datos_extra}</p>
        </div>
        <div className='mt-4 mb-4 text-lg w-3/4'>
          <h3 className='text-2xl font-bold text-[#004e89] underline decoration-[#ff6b35] mb-2'>Mi dirección es:</h3>
          <p className='text-xl'>{zona}</p>
        </div>
        <div className='mt-4 mb-6'>

        <p className='text-2xl font-bold mb-2 text-[#004e89] underline decoration-[#ff6b35]'>Contacta a mi dueño:</p>
        <p className='m-2 mt-4  text-xl'><span className='text-[#004e89] font-bold text-xl mr-2'>Email:</span> {email_contacto}</p>
        <p className='m-2 mt-4 mb-4  text-xl'><span className='text-[#004e89] font-bold text-xl mr-2 '>Telefono:</span>{contacto}</p>
        <a className='animate-wiggle animate-infinite' href={`https://wa.me/${contacto}`} target="_blank" rel="noopener noreferrer"><Button variant="outline" className=" text-[#004e89] text-2xl font-semibold "><FaWhatsapp className='mr-2 animate-wiggle animate-infinite'/> Enviar WhatsApp</Button></a>
        </div>
      </div>
    <Footer></Footer>
    </div>
  );
}

export default mascota