import React, { useState } from "react";
import App from "../card/card";

export default function Fill({ products }) {
  const [filters, setFilters] = useState({
    name: "",
    minPrice: "",
    maxPrice: "",
    color: "",
  });

  function handleFilterChange(id, value) {
    setFilters(() => ({
      ...filters,
      [id]: value,
    }));
  }

  const filteredProducts = products.filter((item) => {
    return (
      (!filters.name || item.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (!filters.color ||
        (Array.isArray(item.colors) &&
          item.colors.some((c) => c.toLowerCase().includes(filters.color.toLowerCase())))) &&
      (!filters.minPrice || item.price >= parseFloat(filters.minPrice)) &&
      (!filters.maxPrice || item.price <= parseFloat(filters.maxPrice))
    );
  });

  return (
      <div className="flex flex-row w-[95vw]">
        <div className="w-[30vw]">
          <h2 className="mt-[100px] ml-[50px]">Filter</h2>
          <form className="ml-[50px]">
            <div className="mb-[10px]">
              <h5 className="ml-[15px]">Name</h5>
              <input
                type="text"
                value={filters.name}
                onChange={(e) => handleFilterChange("name", e.target.value)}
                className="h-[30px] w-[200px] border-2 border-gray-400 rounded-[10px] mb-[10px]"
              />
            </div>
            <div className="mb-[10px]">
              <h5 className="ml-[15px]">Select Color</h5>
              <input
                type="text"
                value={filters.color}
                onChange={(e) => handleFilterChange("color", e.target.value)}
                className="h-[30px] w-[200px] border-2 border-gray-400 rounded-[10px] mb-[10px]"
              />
            </div>
            <div className="mb-[10px]">
              <h5 className="ml-[15px]">Price</h5>
              <div className="flex flex-row w-[200px] justify-between">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange("minPrice", e.target.value)}
                  className="border-2 border-gray-400 w-[85px] rounded-[10px] p-[5px]"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
                  className="border-2 border-gray-400 w-[85px] rounded-[10px] p-[5px]"
                />
              </div>
            </div>
          </form>
        </div>
      <App products={filteredProducts} />
    </div>
  );
}
