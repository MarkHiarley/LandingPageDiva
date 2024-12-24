import Button from "./components/Button";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <section >
        <NavBar />
        <div>
          <div className="flex flex-col items-center p-8" >
            <img src="./img/logo.png" alt="LOGO" className="w-1/5  p-4 pb-7" />
            <Button />
          </div>
          <p className="text-center pb-3 text-2xl">Quem sou eu?</p>
          <div className="flex flex-row items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center w-4/6 h-auto">
              <p className="flex flex-wrap text-center text-xl pr-4 h-2/4">

                Sou Edvânia, empreendedora, designer de sobrancelhas, designer de cílios e epiladora. Sou apaixonada pelo meu trabalho e mãe de três filhos maravilhosos.

                Comecei minha trajetória na área da beleza há cerca de três anos, atuando inicialmente como manicure. Com o tempo, descobri minha paixão pelas sobrancelhas, que ganharam meu coração. Mais recentemente, me aventurei no mundo da epilação e dos cílios, e foi aí que tive a certeza de estar no lugar certo, fazendo exatamente o que amo.

                Tenho um olhar atento aos detalhes e um senso apurado de design, sempre buscando superar as expectativas de minhas clientes.

                Sou profundamente grata a cada cliente maravilhosa que me acompanha desde o início, me incentivando a crescer e buscar sempre o melhor.
              </p>
              <img src="./img/PhotoMain.png" alt="FOTO DA MUIER" className="w-96 rounded-md " />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
