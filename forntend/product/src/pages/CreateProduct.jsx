import React, { useState } from "react";
import { useProductStore } from "../store/Store";

function CreateProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    img: "",
  });

  const { createProduct } = useProductStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    createProduct(formData);
    setFormData({
      name: "",
      price: "",
      img: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="w-full h-[90vh] bg-purple-300">
      <div className="w-[50vh] h-[40vh] left-[50%] absolute top-[50%] translate-x-[-50%] translate-y-[-50%] border-[1px] border-zinc-500 bg-red-200">
        <h1 className="font-[gilroy] text-2xl text-center">
          Enter Your Product Details
        </h1>
        <form className="flex flex-col gap-6 w-[70%]" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />
          <input
            type="text"
            name="img"
            placeholder="Img"
            value={formData.img}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
