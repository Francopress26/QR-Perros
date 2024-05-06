import Mascota from  '../../../../components/mascota/mascota.jsx';
import Form from '../../../../components/form/Authform.jsx';

async function getDog(id) {
    const res = await fetch(`http://localhost:3000/api/mascota/${id}`)
  const data = await res.json()

  if(!data){
    const response = {
      vacio :true
    }
    return 
  }
  return data

    //Busco el perro de los params
  

  }

export default async function Page({ params }) {
const mascota = await getDog(params.slug)
 //Ver si en el storage hay una password
 //Si no hay : pedirla
 //Si hay : ver si coincide con el id
 //O directamente solo llenar el storage si sale del componente de la contraseña y cuando entra al editar, borrar la contraseña
 //asi si entra directamente nunca va a haber contraseña


 //Si mascota no tiene datos: Pido que se cree una cuenta --> Se la crea -->La asocio al id de la mascota -> puede llenar los datos y editarlos
 //Si tiene datos: los muestro 

  return (
  <div className='w-full   flex items-center justify-center'>
    {
    mascota && mascota.nombre  ?  
    <Mascota 
      nombre={mascota.nombre}  
      datos_extra={mascota.datos_extra} 
      zona={mascota.zona} 
      contacto={mascota.contacto} 
      email_contacto={mascota.email_contacto} 
      imageURL={mascota.imageURL}/>
      : 
      //Register form
    <Form id={params.slug}/>
    
    }

    </div>
  );
}
