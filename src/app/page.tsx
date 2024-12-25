import Button from "./components/Button";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <section>
        <NavBar />
        <div className="flex flex-col items-center p-4 md:p-8">
          <div className="flex flex-col items-center">
            <img
              src="./img/logo.png"
              alt="LOGO"
              className="w-1/2 md:w-1/5 p-4 pb-7"
            />
            <a href="https://api.whatsapp.com/send/?phone=5588992734978&text&type=phone_number&app_absent=0" className="hover:scale-110 transition-transform duration-300"><Button /></a>
          </div>
          <p className="text-center p-3 text-xl md:text-2xl font-semibold">
            Quem sou eu?
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6">
            <div className="flex flex-col items-center md:items-start text-justify w-full md:w-2/3 px-4">
              <p className="text-base md:text-lg leading-relaxed">
                Sou Edvânia, empreendedora, designer de sobrancelhas, designer de cílios e epiladora. Sou apaixonada pelo meu trabalho e mãe de três filhos maravilhosos.
                <br />
                <br />
                Comecei minha trajetória na área da beleza há cerca de três anos, atuando inicialmente como manicure. Com o tempo, descobri minha paixão pelas sobrancelhas, que ganharam meu coração. Mais recentemente, me aventurei no mundo da epilação e dos cílios, e foi aí que tive a certeza de estar no lugar certo, fazendo exatamente o que amo.
                <br />
                <br />
                Tenho um olhar atento aos detalhes e um senso apurado de design, sempre buscando superar as expectativas de minhas clientes.
                <br />
                <br />
                Sou profundamente grata a cada cliente maravilhosa que me acompanha desde o início, me incentivando a crescer e buscar sempre o melhor.
              </p>
            </div>

            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src="./img/PhotoMain.png"
                alt="FOTO DA MUIER"
                className="w-full md:w-96 rounded-md shadow-lg"
              />
            </div>
          </div>

          <p className="text-center p-3 text-xl md:text-2xl font-semibold">
            Formação
          </p>

          <div>
            <div className="flex flex-col items-center md:items-start text-justify w-full md:w-2/3 px-4">
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}