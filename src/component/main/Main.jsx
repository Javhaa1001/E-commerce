import Fill from "../Filter/Fillter";
import { useState, useEffect } from "react";
import axios from 'axios';


export default function Main (user) {
  const [products , setProducts] = useState([]);

  async function getProducts(){
    try {
      const response = await axios.get('http://localhost:3000');
      setProducts(response.data.data); 
      console.log("hello", response.data);
    } catch (error) {
      console.error('Бүтэлгүйтсэн: бүтээгдэхүүнүүдийг авч чадаагүй.', error);
    }
  }
  


  useEffect(() => {
    getProducts();
  }, [])
  
  return (
      <div className="mt-[12vh]">
        <Fill products= {products} user={user} />
      </div>

  );
};



