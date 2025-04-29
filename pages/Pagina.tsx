import {useRouter} from 'next/router';

const Pagina = () => {
  const router = useRouter();

  const handleReturn = () =>{
    router.push(`/`);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 
      className=" text-2xl text-blue-600 p-4 mt-[10vh]">
        ✔Soy la pagina que si debe ser renderizada por el enrutamiento de Next JS✔
      </h1>
      <div className="p-[1rem] border-solid border-1 w-[30vw] h-[40vh]">
        <img src="https://cataas.com/cat/says/Ahora Si" alt="Gato SSR" className="w-full h-11/12 object-contain"/>
        
      </div>
      <button
        onClick={handleReturn}
      >Volver</button>
    </div>
  );
};

export default Pagina;