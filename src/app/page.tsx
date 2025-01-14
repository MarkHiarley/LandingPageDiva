"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "./components/Button";
import NavBar from "./components/NavBar";

const servicos = [
  { src: "./img/Servicos/blowlamination.jpg", nome: "Blow Lamination" },
  { src: "./img/Servicos/Epilacao.png", nome: "Epilação" },
  { src: "./img/Servicos/cilios.png", nome: "Cílios" },
  { src: "./img/Servicos/DesingcomHenna.jpg", nome: "Design com Henna" },
  { src: "./img/Servicos/LAsh.jpg", nome: "Lash" },
  { src: "./img/Servicos/Desing.png", nome: "Design" },
];

export default function Home() {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollInterval: NodeJS.Timeout;

    if (!isPaused && carousel) {
      scrollInterval = setInterval(() => {
        carousel.scrollLeft += 1;
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
          carousel.scrollLeft = 0;
        }
      }, 20);
    }

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [isPaused]);

  return (
    <>
      <section className="bg-gradient-to-b from-pink-50 to-pink-100 text-gray-800 min-h-screen">
        <NavBar />
        <div className="flex flex-col items-center p-6 md:p-12 space-y-8">
          <div className="flex flex-col items-center">
            <img
              src="./img/logo.png"
              alt="LOGO"
              className="w-32 md:w-48 mb-4 transition-transform hover:scale-105"
            />
            <a
              href="https://api.whatsapp.com/send/?phone=5588992734978&text&type=phone_number&app_absent=0"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Button />
            </a>
          </div>
          <p className="text-center text-2xl md:text-3xl font-bold">Quem sou eu?</p>
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
            <div className="text-base md:text-lg leading-relaxed text-gray-700 px-4 md:w-2/3">
              <p>
                Sou Edvânia, empreendedora, designer de sobrancelhas, designer de cílios e epiladora.
                Sou apaixonada pelo meu trabalho e mãe de três filhos maravilhosos.
              </p>
              <p className="mt-4">
                Comecei minha trajetória na área da beleza há cerca de três anos, atuando inicialmente
                como manicure. Com o tempo, descobri minha paixão pelas sobrancelhas, que ganharam meu
                coração.
              </p>
              <p className="mt-4">
                Tenho um olhar atento aos detalhes e um senso apurado de design, sempre buscando superar
                as expectativas de minhas clientes.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src="./img/PhotoMain.png"
                alt="Foto de Edvânia"
                className="w-64 md:w-96 rounded-md shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
          <p className="text-center text-2xl md:text-3xl font-bold">Principais Serviços</p>
          <div
            className="flex overflow-hidden w-full justify-center mt-8 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            ref={carouselRef}
          >
            <div className="flex space-x-4">
              {servicos.map((servico, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer flex-shrink-0 transform transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={servico.src}
                    alt={servico.nome}
                    className="rounded-lg shadow-lg w-48 md:w-64"
                  />
                  <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full text-center bg-black bg-opacity-70 text-white px-2 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {servico.nome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}