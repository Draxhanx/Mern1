import product from "../model/product.model.js";
import mongoose from "mongoose";


export const getProduct = async (req, res) => {
   
try {
  const data = await product.find({})
  res.status(200).json({success:true , meassage:"you got all products" , data:data})
  
} catch (error) {
  res.status(404).json({meassage:"Products Not Found"})
  console.error(Error + "Product not found")
  
}

  }

  export const createProduct =  async (req, res) => {
    const { name, price, img } = req.body;
    try {
      if (!name || !price || !img) {
        res.status(400).json({ message: "all fileds require" });
      }
      await product.create({
        name,
        price,
        img,
      });
  
      res.status(200).json({ sucess: true, message: "product cretaed" });
    } catch (error) {
      res.status(404).json({ message: "user is not creted" });
      console.error(error + "please check all you fields");
    }
  }


  export const updateProduct =  async (req, res) => {
    const { id } = req.params;
  
    const { name, price, img } = req.body;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "invlaid product id" });
    }
    try {
      await product.findByIdAndUpdate(id, { name, price, img }, { new: true });
  
      res.status(200).json({ sucess: true, message: "product upadted" });
    } catch (error) {
      res.status(404).json({ message: "product is not updated" });
      console.error(error + "please check all you fields");
    }
  }


  export const deleteProduct = async (req, res) => {
    const { id } = req.params;
  
    console.log(id);
  
    try {
      await product.findByIdAndDelete(id);
      res.status(200).json({ success: true, meassage: "product is deleted" });
    } catch (error) {
      res.status(401).json({ success: false, meassage: "product is found" });
      console.error(error + "unavail to delete product");
    }
  }
