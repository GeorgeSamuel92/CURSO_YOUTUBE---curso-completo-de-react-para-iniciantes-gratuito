import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFetch } from "../utils/useFetch.js";
import ProductsList from "../components/ProductsLists.js";
import ProductsDetailsSkeleton from "../components/ProductsDetailsSkeleton.js";


export default function Home() {
    const { data: products, isError, isLoading, error, } = useFetch('http://localhost:8000/products');

    return (
        <div className="home">
            {isError && (
                <p className="error-message" >
                    <span>! </span>
                    {error.message}
                </p>
            )}

            {isLoading && <ProductsDetailsSkeleton title="Todos Productos" />}
            {products && <ProductsList products={products} title="Todos Productos" />}
        </div>
    );
}