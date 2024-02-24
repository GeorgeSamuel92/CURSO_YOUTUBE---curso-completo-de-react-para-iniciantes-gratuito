import { useState, useEffect } from "react";
import ProductsList from "./ProductsLists.js";

import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    const [products, setProducts] = useState(null);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/products')
                .then((res) => res.json())
                .then((data) => {
                    setProducts(data);
                    setIsloading(false);
                });
        }, 1000);
    }, []);

    return (
        <div className="home">
            {isLoading && (
                <div className="notch-container">
                    <FontAwesomeIcon icon={faCircleNotch} className="loading-notch" />
                </div>
            )}
            {products && <ProductsList products={products} title="Todos Productos" />}
        </div>
    );
}