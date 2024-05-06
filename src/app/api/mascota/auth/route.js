import { NextResponse } from "next/server";
import { prisma} from "../../../../lib/prisma"
import bcrypt from 'bcrypt'

export async  function GET(request,{params}){
    return NextResponse.json({response:"ok"})

}


export async  function POST(request,{params}){

    const data= await request.json();
   console.log(data)
   
        const mascotFound = await prisma.mascota.findUnique({
            where:{
                id:Number(data.id)
            }
        })
        if(!mascotFound) return NextResponse.json({ error: 'Mascota no encontrada' }, { status: 401 })

        const matchPassword = await bcrypt.compare(data.clave, mascotFound.codigoQR);

        if(!matchPassword){
            return NextResponse.json({error:"Las claves no coinciden"},{status:200,statusText:"No coinciden"})
        }else{

            return NextResponse.json({success:"Ok"},{status:200,statusText:"Ok"})
        }




   
       

}
