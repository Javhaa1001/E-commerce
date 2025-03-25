import React, { useState } from "react";
import axios from "axios";

function Posts() {
  const [product, setProduct] = useState({
    image: "",
    name: "",
    quantity: "",
    price: "",
    color: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    try {
      const response = await axios.post("http://localhost:3000/add", {
        img: product.image,  
        name: product.name,
        quantity: product.quantity,
        price: product.price,
        color: product.color
      });

      console.log("Server Response:", response.data);
      alert("Product added successfully! ✅");

    } catch (error) {
      console.error("Алдаа гарлаа:", error);
      alert("❌ Алдаа гарлаа, серверээ шалгана уу.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct();
    setProduct({ image: "", name: "", quantity: "", price: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image URL Input */}
          <div>
            <label className="block text-gray-700 font-semibold">Image URL:</label>
            <input
              type="text"
              name="image"
              value={product.image}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-semibold">Product Name:</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Quantity Input */}
          <div>
            <label className="block text-gray-700 font-semibold">Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
              placeholder="Enter quantity"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              min="1"
            />
          </div>

          {/* Price Input */}
          <div>
            <label className="block text-gray-700 font-semibold">Price ($):</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              min="0"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Color:</label>
            <input
              type="text"
              name="color"
              value={product.color}
              onChange={handleChange}
              placeholder="Enter color"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Posts;
