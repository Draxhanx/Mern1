import React from "react";
import { Link } from "react-router-dom";

function Cards({ products, deleteProduct }) {
  return (
    <div className="w-[40vh] h-[30vh] ">
      <div className="cardInfo w-full h-full flex border-[1px] border-zinc-500">
        <div className="left w-[40%] h-full ">
          <img className="object-cover w-full h-full" src={products.img} alt={products.name} />
        </div>
        <div className="w-[60%] p-2">
          <h1>{products.name}</h1>
          <h1>{products.price}</h1>
          <button onClick={deleteProduct} className="px-3 bg-blue-300 rounded-xl">
            Delete
          </button>
          <Link to={`/update/${products._id}`} className="px-3 bg-blue-300 rounded-xl">
            Update
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cards;
