import { NextResponse } from "next/server";
import { prisma} from "../../../../lib/prisma"
import bcrypt from 'bcrypt'

export async  function GET(request,{params}){

    
    const id = params.id

    if(!id){
        return NextResponse.json({error:"No hay id"},{status:400})
    }
    const findMascota = await prisma.mascota.findUnique({
        where:{id: Number(id)}
    })  
    
    return NextResponse.json(findMascota)

}




export async  function POST(request,{params}){

    const {codigoQR} = await request.json();

    const hashedQR = await bcrypt.hash(codigoQR, 10);

    try {
        const nuevaMascota = await prisma.mascota.create({
            data: {
             
                codigoQR:hashedQR
            }
            })
    
            return NextResponse.json({response:"Ok"})
    } catch (error) {
        return NextResponse.json({error})
    }
   

}


export async  function PUT(request,{params}){

    const id = params.id;
    
    const data = await request.json();

 
    if(!data.nombre && !data.raza && !data.datos_extra && !data.zona && !data.email_contacto && !data.contacto && !data.imageURL ){
        return NextResponse.error('Todos los campos no pueden estar vacios',405);
    }


//Esto seria la primera vez
    if(data.codigoQR){
        const hashedQR = await bcrypt.hash(data.codigoQR, 10);
        const nuevaMascota = await prisma.mascota.update({
            where: {
                id: Number(id),
              },
            data: {
                nombre : data.nombre,
                datos_extra:data.datos_extra,
                zona:data.zona,
                contacto:data.contacto,
                email_contacto:data.email_contacto,
                imageURL:data.imageURL,
                codigoQR : hashedQR
            }
            })
            const { password: _, ...mascota } = nuevaMascota;
            return NextResponse.json(nuevaMascota)

//Y esto para edicion
    }else{
        const nuevaMascota = await prisma.mascota.update({
            where: {
                id: Number(id),
              },
            data: {
                nombre : data.nombre,
                datos_extra:data.datos_extra,
                zona:data.zona,
                contacto:data.contacto,
                email_contacto:data.email_contacto,
                imageURL:data.imageURL,
            }
            })
            const { password: _, ...mascota } = nuevaMascota;
            return NextResponse.json(nuevaMascota)

    }

   



}


export async  function DELETE(request,{params}){}