"use client";
import Button from "./components/Button";
import NavBar from "./components/NavBar";
import React, { useState, useEffect } from "react";

const servicos = [
  { src: "./img/Servicos/blowlamination.jpg", nome: "Blow Lamination" },
  { src: "./img/Servicos/Epilacao.png", nome: "Epilação" },
  { src: "./img/Servicos/cilios.png", nome: "Cílios" },
  { src: "./img/Servicos/DesingcomHenna.jpg", nome: "Design com Henna" },
  { src: "./img/Servicos/LAsh.jpg", nome: "Lash" },
  { src: "./img/Servicos/Desing.png", nome: "Design" },
];

const preloadImages = (imageArray: { src: string; nome: string }[]) => {
  imageArray.forEach((image) => {
    const img = new Image();
    img.src = image.src;
  });
};

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    preloadImages(servicos);

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % servicos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="bg-gradient-to-b from-pink-50 to-pink-100 text-gray-800 min-h-screen">
        <NavBar />
        <div className="flex flex-col items-center p-6 md:p-12 space-y-8">
          {/* Logo e Botão */}
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

          {/* Quem Sou Eu */}
          <p className="text-center text-2xl md:text-3xl font-bold">Quem sou eu?</p>
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
            <div className="text-base md:text-lg leading-relaxed text-gray-700 px-4 md:w-2/3">
              <p>
                Sou Edvânia, empreendedora, designer de sobrancelhas, designer de cílios e epiladora. Sou apaixonada pelo meu trabalho e mãe de três filhos maravilhosos.
              </p>
              <p className="mt-4">
                Comecei minha trajetória na área da beleza há cerca de três anos, atuando inicialmente como manicure. Com o tempo, descobri minha paixão pelas sobrancelhas, que ganharam meu coração. Mais recentemente, me aventurei no mundo da epilação e dos cílios, e foi aí que tive a certeza de estar no lugar certo, fazendo exatamente o que amo.
              </p>
              <p className="mt-4">
                Tenho um olhar atento aos detalhes e um senso apurado de design, sempre buscando superar as expectativas de minhas clientes. Sou profundamente grata a cada cliente maravilhosa que me acompanha desde o início, me incentivando a crescer e buscar sempre o melhor.
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

          {/* Serviços */}
          <p className="text-center text-2xl md:text-3xl font-bold">Principais Serviços</p>
          <div className="flex flex-col items-center">
            <div className="w-full md:w-2/3">
              <img
                src={servicos[currentImageIndex].src}
                alt={servicos[currentImageIndex].nome}
                className="rounded-lg shadow-lg w-full transition-all duration-1000"
              />
            </div>
            <p className="text-center mt-4 text-lg md:text-xl font-medium">
              {servicos[currentImageIndex].nome}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
