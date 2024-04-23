function sleep(timer = 5000) {
  return new Promise((resolve) => setTimeout(resolve, timer));
}

async function getNosotros() {
  await sleep();
  const response = await fetch("http://localhost:3000/api/nosotros/", {
    cache: "no-store",
  });
  return response.json();
}

async function ProductList() {
  const response = await getNosotros();
  console.log(response);
  return (
    <div>
      <h3>Lista de productos</h3>
    </div>
  );
}

export default ProductList;
