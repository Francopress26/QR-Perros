import React from 'react'
import EditForm from '../form/editForm.jsx'
async function getDog(id) {
    const res = await fetch(`http://localhost:3000/api/mascota/${id}`)
  const data = await res.json()

  if(!data){
    const response = {
      vacio :true
    }
    return response
  }
  return data

    //Esto no deberia exsistir

  }


   async function Edit ({id})  {
    const mascota = await getDog(id)

  return (
    mascota && <EditForm 
    nombre={mascota.nombre}
     zona={mascota.zona} 
     datos_extra={mascota.datos_extra} 
     contacto={mascota.contacto}
     email_contacto={mascota.email_contacto}
     imageURL={mascota.imageURL}
     id={id}></EditForm>
    
  )
}

export default Edit