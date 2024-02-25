import {useParams } from 'react-router-dom';

export default function ProductDetails() {
    const {id} = useParams();

    return (
        <div className="product-details">
            <h2>Detalhe do producto {id} </h2>
        </div>
    );
}