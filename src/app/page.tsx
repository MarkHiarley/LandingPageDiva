import Button from "./components/Button";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <section >
        <NavBar />
        <div>
          <div className="flex flex-col items-center p-16" >
            <img src="asa" alt="LOGO" className="p-4" />
            <Button/>
          </div>
          <div className="flex flex-row items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center w-2/6">
              <p className="flex flex-wrap text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, corporis iste? Porro error rerum fugiat cum. Laboriosam vero alias blanditiis, consequatur eos praesentium dolorem consectetur dolor, deleniti corrupti, tempora molestiae.
              </p>
              <img src="as" alt="FOTO DA MUIER" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
