import React, { useState, useEffect } from "react";
import axios from "axios";

function List() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await axios.get("http://localhost:3000");
      console.log("Fetched Data:", response.data); // 🛠 Бүтцийг шалгах
      const data = response.data.data;
      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        console.error("Invalid data format:", data);
        setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mt-[10vh] mb-6">PRODUCT LIST</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-6 py-3 text-left">Image</th>
              <th className="px-6 py-3 text-left">Title</th>
              <th className="px-6 py-3 text-left">Color</th>
              <th className="px-6 py-3 text-left">Stock</th>
              <th className="px-6 py-3 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="px-6 py-4">
                  <img
                    src={product.img || "https://via.placeholder.com/50"}
                    alt={product.name || "No title"}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4 font-semibold">{product.name || "No title"}</td>
                <td className="px-6 py-4 font-semibold">{product.color || "No color"}</td>
                <td className="px-6 py-4 font-semibold">{product.quantity || "No quantity"}</td>
                <td className="px-6 py-4 font-bold">${product.price || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
