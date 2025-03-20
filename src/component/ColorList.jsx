import React, { useState } from 'react';

const ColorList = ({ colors }) => {
    const [activeColor, setActiveColor] = useState(null);

    const handleColorClick = (color) => {
        setActiveColor (color);
    };
    
    return (<div className="colorHeseg">
        <h3 className="text-gray-500 mt-[1px]">Color</h3>
        <div className="flex flex-row mr-[3px]">
          {colors.map(color => (
            <div 
              key={color}
              onClick={() => handleColorClick(color)}
              className="cursor-pointer h-[20px] w-[20px] rounded-full mr-[15px]"
              style={{ backgroundColor: color }}
            >
            <div
            className={`h-[20px] w-[20px] rounded-full ${activeColor === color ? 'border-2 border-black' : ''}`}style={{ backgroundColor: color }}></div>
          </div>
          ))}
        </div>
      </div>
    );      
};

export default ColorList;