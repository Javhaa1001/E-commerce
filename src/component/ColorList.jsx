import React from 'react';

const ColorList = ({ colors, selectedColor, onColorSelect }) => {

  console.log("check",colors)
  return (
    <div className="flex gap-[10px]">
      {colors?.map(color => (
        <div
          key={color}
          onClick={() => onColorSelect(color)} 
          className={`cursor-pointer w-[20px] h-[20px] rounded-full`}
          style={{
            backgroundColor: color,
            border: selectedColor === color ? '2px solid black' : 'none'
          }}
        />
      ))}
    </div>
  );
};

export default ColorList;
