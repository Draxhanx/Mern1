import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],

  // Set a new list of products
  setProducts: (products) => set({ products }),

  // Function to create a new product
  createProduct: async (newProduct) => {
    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      const result = await response.json();

      if (result.success) {
        // Assuming `result.data` is the newly created product
        set((state) => ({
          products: [...state.products, result.data],
        }));
        console.log("Product created successfully");
      } else {
        console.error("Failed to create product:", result.message);
      }
    } catch (error) {
      console.error("Error:", error + " not able to create products");
    }
  },

  // Function to get all products
  getProducts: async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (result.success) {
        set({ products: result.data });
      } else {
        console.error("Failed to fetch products:", result.message);
      }
    } catch (error) {
      console.error("Error:", error + " products not found");
    }
  },
  deleteProduct: async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const result = await response.json(); // Await the JSON parsing
  
      if (result.success) { // Check if deletion was successful
        set((state) => ({
          products: state.products.filter((product) => product._id !== id),
        }));
        return { success: true, message: "Product deleted successfully" };
      } else {
        console.error("Failed to delete product:", result.message);
        return { success: false, message: result.message };
      }
    } catch (error) {
      console.error(error + " product could not be deleted");
      return { success: false, message: "Product could not be deleted due to an error" };
    }
  }
  
}));
