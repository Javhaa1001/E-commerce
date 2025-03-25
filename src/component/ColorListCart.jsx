import React from 'react';
import { useState } from 'react';

const ColorListCart = ({ colors, color }) => {
    
    const [selectedColor, onColorSelect] = useState(color)
    console.log("jawha",selectedColor)

  return (
    <div className="flex gap-[10px]">
      {colors?.map(color => (
        <div>

            <div
            key={color}
            onClick={() => onColorSelect(color)} 
            className={`cursor-pointer w-[20px] h-[20px] rounded-full`}
            style={{
                backgroundColor: color,
                border: selectedColor === color ? '2px solid black' : 'none'
            }}
            />
        </div>
        
      ))}
    </div>
  );
};

export default ColorListCart;
