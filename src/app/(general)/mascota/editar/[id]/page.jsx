'use client'
import React, { useState } from 'react';
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from 'next/navigation'
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
import ValidateForm from '../../../../../components/form/validateForm'
import Footer from '../../../../../components/footer/footer.jsx'
import { useAppDispatch } from '@/store/hooks';
import { Login } from '@/store/auth/authSlice';
const formSchema = z
  .object({
    clave: z.string().min(3,{message:"Ingresá la clave"}),
    
  })

const ValidateEdit = () => {
const params = useParams()
const router = useRouter()
const [mostrar,setMostrar]=useState(false)
const [styleDesc,setStyleDesc]=useState("hidden text-red-700")
const dispatch = useAppDispatch()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        clave:""
    },
  });
  const handleSubmit = async (values,event) => {
    //Mando la clave al back, la hasheo y la comparo, si sale ok muestro el form
    const data={
      clave:values.clave,
      id:params.id
    }
    const res = await fetch(`http://localhost:3000/api/mascota/auth`,{
      method:"POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
  })
  console.log(res)
    if (res.statusText !== "Ok") {
      setStyleDesc("block text-red-700")
    } else {
      dispatch(Login())
      router.push(`/editar/${params.id}`)
    }
  }

  return (
    <div className='min-h-screen w-full flex flex-col justify-between items-center'>

      {mostrar ?
        <ValidateForm id={params.id}></ValidateForm> :
        <div className='flex flex-col w-3/4 justify-around h-full '>
          <h1 className='text-3xl font-bold mb-12 mt-6 text-[#004e89]'>Ingresá la clave para poder editar los datos de tu mascota</h1>

          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className='text-2xl w-full '>
                <FormField
                  control={form.control}
                  name="clave"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="text-3xl">Clave de edición</FormLabel>
                        <FormControl>
                          <Input
                            placeholder=""
                            className="text-3xl"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className={styleDesc}>
                          <span className='text-red-600 text-2xl'>Clave incorrecta</span>
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    );
                  }}

                />
                <Button type="submit" className="w-full mt-4 text-3xl border border-[#ff6b35] bg-[#004e89]">
                  Enviar
                </Button>
              </form>

            </Form>
          </div>


        </div>

      }
<Footer></Footer>
    </div>

  );
};

export default ValidateEdit;