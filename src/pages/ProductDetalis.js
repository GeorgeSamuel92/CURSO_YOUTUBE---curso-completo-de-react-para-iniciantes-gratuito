import { useParams } from 'react-router-dom';
import { useFetch } from '../utils/useFetch';
import ProductsDetailsSkeleton from '../components/ProductsDetailsSkeleton';

export default function ProductDetails() {
    const { id } = useParams();
    const { data: product, isError, isLoading, error } = useFetch("http://localhost:8000/products/" + id);

    return (
        <div className="product-details">
            {isError && <p>{error.message}</p>}
            {isLoading && <ProductsDetailsSkeleton />}
            {product && (
                <article>
                    <h2> {product.name} </h2>
                    <p>Preço: {product.price}</p>
                    <p>Adcionado por: {product.worker}</p>
                    <div className='description' > {product.description}</div>
                </article>
            )}
        </div>
    );
}

