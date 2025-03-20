import React from "react";

const Tsvnh = () => {
  return (
    <div className="flex flex-col items-center p-5">
      
      <div className="w-[300px] h-[300px] flex justify-center items-center mb-4">
        <img
          src="https://cdn.zochil.shop/17515606-5a1d-41dc-9089-8016cf795766_t700.jpg"
          alt="Tsvnh"
          className="w-full h-full object-contain rounded-md border-2 border-blue-700"
        />
      </div>

      <h1 className="text-3xl font-bold mb-2">Tsvnh</h1>
      <div className="text-xl text-black mb-4">$19.99</div>

      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        (This is a placeholder description. You can replace it with the actual product description.)
      </p>

      <div className="flex justify-start mb-4">
        {["red", "blue", "green"].map((color, index) => (
          <div
            key={index}
            className="w-6 h-6 rounded-full mr-3"
            style={{ backgroundColor: color }}
            title={color}
          />
        ))}
      </div>

      <div className="text-lg mb-4">
        <span className="text-green-500">In Stock: 3</span>
      </div>

      <button
        className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800"
        disabled={false}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Tsvnh;
