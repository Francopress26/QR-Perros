'use client'
import React, { useState } from 'react'
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from 'next/navigation';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from '../ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Calendar } from '../ui/calendar';
import { CldUploadWidget } from 'next-cloudinary';
import { Skeleton } from "@/components/ui/skeleton"
import { useAppSelector} from '../../store/hooks.js'
import { useEffect } from 'react';

const formSchema = z
  .object({
    nombre: z.string().min(1,{message:"El nombre es obligatorio"}),
    datos_extra: z.string().min(1,{message:"Ingresá algun dato de utilidad"}),
    zona:z.string().optional(),
    contacto:z.string().min(6,{message:"Ingresa al menos 6 caracteres"}).refine(contacto => !isNaN(parseFloat(contacto)),{message:"Numero invalido"}),
    email_contacto: z.string().email({message:"Mail invalido"}),
  })

const EditForm = ({nombre,datos_extra,zona,contacto,email_contacto,imageURL,id}) => {
    const router = useRouter()
  const logged = useAppSelector((state) => state.authReducer.isLogged)
  console.log(logged)
  useEffect(()=>{
      if(!logged)
      router.push(`/mascota/${id}`)
  },[])
  
    
    const [url,setUrl]=useState(imageURL)
  
  const [stylesFrom,setStylesFrom] = useState("px-6 py-4 w-full ")
  const [skeletonStyle,setSkeletonStyle] = useState("h-[300px] w-[300px] rounded-xl bg-gray-200 hidden")
  const [imageStyle,setImageStyle] = useState("h-[300px] w-[300px] rounded-xl bg-gray-200 block")

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nombre: nombre,
            datos_extra:datos_extra ,
            zona:zona,
            contacto:contacto,
            email_contacto:email_contacto
        },
      });

      const handleSubmit = async (values,event) => {
        event.preventDefault();

        const Perro ={
          nombre: values.nombre,
          datos_extra: values.datos_extra,
          zona: values.zona,
          contacto: values.contacto,
          email_contacto: values.email_contacto,
          imageURL: url,
        }
       console.log(Perro)
        const res = await fetch(`http://localhost:3000/api/mascota/${id}`,{
          method:"PUT",
          body: JSON.stringify(Perro),
          headers: {
            "Content-Type": "application/json"
          }
      })
      router.push("http://localhost:3000/mascota/"+id)

      };
if(logged === true){
  return (
    <main className="flex min-h-screen w-11/12 flex-col items-center justify-between m-6  ">
        <h2 className='text-2xl font-light text-center mt-2 mb-2 '>Ingresá los datos de tu mascota</h2>
        <div className=' m-2 flex flex-col items-center'>
      <div className="flex flex-col  mb-2">
      <Skeleton className={skeletonStyle} />
      <img className={imageStyle} src={url}></img>
     </div>
        <CldUploadWidget
          options={{ sources: ['local'],  multiple: false,clientAllowedFormats:["png","jpg","jpeg","raw","webp"]
        }}
        
          signatureEndpoint="/api/sign-image"
          onSuccess={(results, widget) => {
            console.log(results)
            setUrl(results.info.secure_url);
            setStylesFrom("px-6 py-4 w-full block")
           setSkeletonStyle("h-[300px] w-[300px] rounded-xl bg-gray-200 hidden")
            setImageStyle("h-[350px] w-[350px] rounded-xl bg-gray-200 ")
            widget.close()
          }}>

          {({ open }) => {
            return (
              <button className=' bg-slate-600 rounded-lg p-3 text-center text-white' onClick={() => open()}>
                Subí una imagen
              </button>
            );
          }}
        </CldUploadWidget>
      </div>
      <Form {...form}>
      <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-4"
        >
            <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ingresa el nombre de tu mascota"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
   
         <FormField
          control={form.control}
          name="datos_extra"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripcion</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Agregá información que pueda ayudar a la persona que encontró a tu mascota.
                  "
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Es importante que seas específico            
          </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="zona"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zona de residencia</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Puedes indicar tu direccion o la zona en donde vives.
                  "
                  className="resize-none"
                  {...field}
                />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
            control={form.control}
            name="contacto"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Numero de Contacto</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ej: 3436-615767"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
            
          />
         <FormField
            control={form.control}
            name="email_contacto"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email de contacto</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ej: nombre@gmail.com"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
            
          />
           
         <Button type="submit" className="w-full">
            Guardar
          </Button>
            </form>
</Form>
        </main>
  )

}else{return ( <main className='flex min-h-screen w-11/12 flex-col items-center justify-between m-6 '>
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[250px] w-[375px] rounded-xl bg-gray-700" />
      <div className="space-y-2">
        <Skeleton className="h-8 w-[375px] bg-gray-700" />
        <Skeleton className="h-8 w-[375px]  bg-gray-700" />
        <Skeleton className="h-8 w-[375px]  bg-gray-700" />
        <Skeleton className="h-8 w-[375px]  bg-gray-700" />
      </div>
    </div>

</main>)}
}

export default EditForm