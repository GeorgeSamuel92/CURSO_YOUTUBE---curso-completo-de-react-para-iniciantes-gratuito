
export default function ProductsListSkeleton({ title }) {
    const products = new Array(3).fill(null)

    return (
        <div className="product-list">
            <h2>{title}</h2>
            {products.map((product, i) => (
                <div className="product-details-skeleton-loading" key={i}>
                    <h2>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                    </h2>
                    <p>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                    </p>
                </div>
            ))}
        </div>
    );
}