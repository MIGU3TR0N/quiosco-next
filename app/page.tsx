// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();

//   useEffect(() => {
//     router.push("/order/hamburguesa");
//   }, [router]);

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold mb-4">¡Hola mundo!</h1>
//         <p className="text-gray-700">Bienvenido a mi aplicación.</p>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const redirectToOrder = () => {
    router.push("/order/hamburguesa");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          ¡Bienvenido al Quiosco de Comida!
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Descubre nuestra deliciosa selección de alimentos.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Luis Gabriel Sanchez Jungo - 19031333
        </p>
        <button
          onClick={redirectToOrder}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full uppercase tracking-wide focus:outline-none focus:ring focus:border-blue-300"
        >
          Ordenar
        </button>
      </div>
    </div>
  );
}
