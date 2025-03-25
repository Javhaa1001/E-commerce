import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios(`http://localhost:3001/product`) 
            .then((res) => res.data) 
            .then((data) => setProduct(data))
            .catch((error) => console.error('Error fetching product:', error)); 
    }, [id]);

    if (!product) return <p>Loading...</p>;
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-4">
            <h2 className="text-3xl font-bold text-center text-gray-800">{product.name}</h2>
            <img 
                src={product.img} 
                alt={product.name} 
                className="mx-auto rounded-lg shadow-lg w-full sm:w-80 md:w-96"
            />
            <p className="text-xl font-semibold text-gray-600">Price: ${product.price}</p>
            <p className="text-gray-700">{product.description}</p>
        </div>
    );
};

export default ProductDetail;
