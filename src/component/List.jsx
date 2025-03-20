import React from "react";
function List() {
    

  const products = [
    { id: 1, name: "Tsvnh", price: 19.99, colors: ["red", "blue", "green"], picture: "https://cdn.zochil.shop/17515606-5a1d-41dc-9089-8016cf795766_t700.jpg", stock: 3 },
    { id: 2, name: "Malgai", price: 24.99, colors: ["yellow", "purple", "black"], picture: "https://i.pinimg.com/736x/a3/17/80/a31780b5fdaf57885fdb2c0d3082a86c.jpg", stock: 2 },
    { id: 3, name: "Tsuw", price: 29.99, colors: ["black", "pink", "orange"], picture: "https://i.pinimg.com/736x/07/f4/ff/07f4ff9b4a458a05fe76f317de4508f7.jpg", stock: 9 },
    { id: 4, name: "Pvvz", price: 15.99, colors: ["brown", "gray", "teal"], picture: "https://i.pinimg.com/736x/33/f1/d0/33f1d0128b3a0830afd2378043e134cc.jpg", stock: 12 },
    { id: 5, name: "Short", price: 39.99, colors: ["cyan", "magenta", "lime", "indigo"], picture: "https://i.pinimg.com/736x/64/78/41/6478418a3937d9e4a05d6e3c718be2d9.jpg", stock: 5 },
  ];
  
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold text-gray-800 mt-[10vh] mb-6">Product's list</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white drop-shadow-lg rounded-b-lg">
              <img
                src={product.picture}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-600">Price: ${product.price}</p>
                <div className="flex space-x-2 mt-2">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">Stock: {product.stock}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
export default List;  