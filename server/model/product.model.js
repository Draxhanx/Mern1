import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    img: {
      type: String, // URL to the image
      required: true
    }
  } ,{timestamps : true});

const product = mongoose.model("product" , productSchema)

// this is the way in module js how we exported 

export default product