'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { useParams } from 'next/navigation'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const params = useParams()

  const menuItems= [
    {text:"Inicio",href:"/"},
    {text:"Datos de la mascota",href:`/mascota/${params.slug ? params.slug : params.id}`},
   {text:"Editar datos",href:`/mascota/editar/${params.slug ? params.slug: params.id}`}
  ]


  return (
    <Navbar className="bg-[#012a4a] border-b border-black text-white" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-xl text-inherit text-white">BuscaDog QR</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href={menuItems}>
            Datos de la mascota
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href={menuItems[2].href} aria-current="page">
            Editar datos
          </Link>
        </NavbarItem>
     
      </NavbarContent>
      <NavbarContent justify="end">
   
        {/* <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color= "primary" 
              className="w-full mt-4 text-2xl"
              href={item.href} 
              size="lg"
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
