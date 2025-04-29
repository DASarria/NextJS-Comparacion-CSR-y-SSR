import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ComparePage({ serverCatUrl }: { serverCatUrl: string }) {
  const router = useRouter();
  const [clientCatUrl, setClientCatUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchClientCat = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setClientCatUrl("https://cataas.com/cat?"+ Math.random());
    };
    fetchClientCat();
  }, []);

  const handleRefresh = () => {
    router.reload();
  };

  const handleChangePage = (component:string) => {
    router.push(`/${component}`);
  };


  return (
    <section className="p-4 flex flex-col justify-center items-center mt-[20vh]">
      <h1 className="justify-center text-center">Comparativa SSR vs CSR (con gatitos 😺)</h1>
      <div className="p-4 flex flex-row items-center">
        <div className="p-[1rem] border-solid border-1 w-[30vw] h-[40vh]">
          <h2>⚡ Client Side Rendering (CSR)</h2>
          {clientCatUrl ? <img src={clientCatUrl} alt="Gato CSR" className="w-full h-11/12 object-contain"/> : <p>⏳ Cargando gato CSR...</p>}
        </div>

        <div className="p-[1rem] border-solid border-1 w-[30vw] h-[40vh]  border-l-0">
          <h2>🚀 Server Side Rendering (SSR)</h2>
          {serverCatUrl ? <img src={serverCatUrl} alt="Gato SSR" className="w-full h-11/12 object-contain"/> : <p>⏳ Cargando gato SSR...</p>}
        </div>

        
      </div>
      

      <div>
      <button className="m-4 "
          onClick={() => handleChangePage(`second`)}
        >
          Pagina mal definida
        </button>

        <button className="m-4"
          onClick={handleRefresh}
        >
          Cambiar Imagenes
        </button>
        <button className="m-4"
          onClick={() =>handleChangePage(`Pagina`)}
        >
          Siguiente pagina {'>'}
        </button>
      </div>
    </section>
  );
}

export async function getServerSideProps() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return {
    props: {
      serverCatUrl: "https://cataas.com/cat?" + Math.random(),
    },
  };
}
