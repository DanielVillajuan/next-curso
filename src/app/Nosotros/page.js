
import Titulo from "./Titulo";
import ProductList from "../Componentes/ProductList";
import { Suspense } from "react";
import AddButton from "../Componentes/AddButton";

export default function Nosotros() {


  return (
    <div className="w-full h-[500px]">
      <Titulo text="Un poco de nosotros en Verde" />
      <Suspense fallback={<div >...Cargando desde el componente suspense</div>}>
        <ProductList />
      </Suspense>
      <AddButton />
    </div>
  );
}
