import React from 'react'
import EditForm from '../../../../components/form/editForm.jsx'
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

  

  }

// Si esta logueado puede ver esta pagina, sino se va al login (protected route)
//Si esta logueado y no tiene datos la mascota, lo lleva al de llenar 
   async function Edit ({params})  {
    const mascota = await getDog(params.id)

  return (
    mascota && <EditForm 
    nombre={mascota.nombre}
     zona={mascota.zona} 
     datos_extra={mascota.datos_extra} 
     contacto={mascota.contacto}
     email_contacto={mascota.email_contacto}
     imageURL={mascota.imageURL}
     id={params.id}></EditForm>
    
  )
}

export default Edit