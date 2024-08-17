import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { useProductStore } from "../store/Store";

function Home() {
  // const [products, setProducts] = useState([]);

  // const deleteProduct = async (id) => {
  //   console.log(id);
  //   try {
  //     const response = await fetch(`http://localhost:5000/api/products/${id}`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     const result = await response.json();
  //     if (result.success) {
  //       setProducts((prevProducts) => prevProducts.filter((p) => p._id !== id));
  //     } else {
  //       console.error("Failed to delete product:", result.message);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

const { getProducts , products ,deleteProduct }=  useProductStore()
  

console.log(products)

  useEffect(() => {

 getProducts()

  }, [getProducts]);

  return (
    <div className="w-full h-[90vh] ">
      <div className="mt-10 flex gap-10 flex-wrap">
        {products.map((items) => (
          <Cards
            key={items._id} // Adding a unique key for each item
            products={items}
            deleteProduct={()=>deleteProduct(items._id)}
          
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
