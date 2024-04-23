
export async function generateStaticParams() {
    // fetch de los mas consumido
    
  return [
    { categoria: "niños" },
    { categoria: "neumaticos" },
    { categoria: "usados" },
  ];
}

export default function Categoria({ params }) {
  const { categoria } = params;
  return <div>la ruta dinamica dentro de Nosotros es: {categoria}</div>;
}
