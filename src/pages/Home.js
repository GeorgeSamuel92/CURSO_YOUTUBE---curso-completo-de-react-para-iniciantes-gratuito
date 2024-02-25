import { useFetch } from "../utils/useFetch.js";
import ProductsList from "../components/ProductsLists.js";
import ProductsDetailsSkeleton from "../components/ProductsDetailsSkeleton.js";
import ErrorMessage from "../components/ErrorMessage.js";


export default function Home() {
    const { data: products, isError, isLoading, error, } = useFetch('http://localhost:8000/products');

    return (
        <div className="home">
            {isError && <ErrorMessage  message={error.message} />}
            {isLoading && <ProductsDetailsSkeleton title="Todos Productos" />}
            {products && <ProductsList products={products} title="Todos Productos" />}
        </div>
    );
}