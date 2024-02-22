import React, { useState } from 'react';
import ProductsList from './ProductsLists';

export default function Home() {
    const [products, setProducts] = useState([
        {
            name: "Samsung S24 Ultra",
            description: "producto teste adicionado",
            worker: "Uanela",
            id: 1,
        },
        {
            name: "iPhone 15 Pro Max",
            description: "producto teste adicionado",
            worker: "Jobs",
            id: 2,
        },
        {
            name: "Xiaomi 13 Ultra",
            description: "producto teste adicionado",
            worker: "Uanela",
            id: 3,
        },
    ]);

    const handleDelete = (id) => {
        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts)
    }

    return (
        <div className='home'>
            <ProductsList products={products} title="Todos Produtos" handleDelete={handleDelete} />
        </div>
    );
}