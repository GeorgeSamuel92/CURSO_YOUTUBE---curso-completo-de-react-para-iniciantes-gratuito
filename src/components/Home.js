import { useState, useEffect } from "react";
import ProductsList from "./ProductsLists.js";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    const [products, setProducts] = useState(null);
    const [isLoading, setIsloading] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/products')
                .then((res) => {
                    if (!res.ok)
                        throw Error(
                            'não possivel carregar os dados para esse recurso'
                        );
                    return res.json();
                })
                .then((data) => {
                    setProducts(data)
                    setIsloading(false);
                })
                .catch((err) => {
                    setIsError(err);
                    setIsloading(false);
                    // console.log(err);
                });
        }, 1000);
    }, []);

    return (
        <div className="home">
            {isError && (
                <p className="error-message" >
                    <span>! </span>
                    {isError.message}
                </p>
            )}

            {isLoading && (
                <div className="notch-container">
                    <FontAwesomeIcon icon={faCircleNotch} className="loading-notch" />
                </div>
            )}
            {products && <ProductsList products={products} title="Todos Productos" />}
        </div>
    );
}