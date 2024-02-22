import React, { useState} from 'react';

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
            worker: "Buffet",
            id: 3,
        },
    ]);

    return (
        <div className='home'>
            <h2>Homepage</h2>
            {products.map(products =>
                <div className='product-preview' key={products.id}>
                    <h2>{products.name}</h2>
                    <p>Adcionado por {products.worker}</p>
                </div>
            )}


        </div>
    )
}