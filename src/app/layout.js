import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import { Toaster } from "@/components/ui/toaster"
import {store} from '../store/index.js';
import { ProviderR } from "../store/Providers.jsx";
 const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BuscaDog QR",
  description: "Encuentrá a tu mascota perdida",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ " w-full h-full  "}>
      <ProviderR>

      <Providers>
        {children}
      
        </Providers>
       </ProviderR>

        <Toaster />

        </body>

    </html>
  );
}
