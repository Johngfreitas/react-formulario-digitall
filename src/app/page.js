"use client";
import { useEffect } from "react";

export default function Home() {

  useEffect (() => {
    console.info('Depois de renderizar o componente Home');
  }, [])
  
  console.info('Antes de renderizar o componente Home');

  return (

    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      HOME
    <a href="/Sobre" className="mt-4">
      Ir para sobre
    </a>
      
    </main>
  );
}
