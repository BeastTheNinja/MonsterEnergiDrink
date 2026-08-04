import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getProductById } from "../../../services/product.service";

type Product = {
    id: number;
    image: string;
    name: string;
    price: string;
    stock: number;
}

export const ProductsDetailsPage = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                if (!id) return;

                const data = await getProductById(parseInt(id));
                setProduct(data);
            } catch (err: unknown) {
                const message =
                    err instanceof Error ? err.message : "Failed to fetch product";
                setError(message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="text-red-600">{error}</div>;
    }

    if (!product) {
        return <div className="text-red-600">Product not found</div>;
    }

    return (
        <div className="product-details-page">
            <div className="box-content mt-20">
                <div className="w-auto h-50 relative border-b border-lime-400/50 overflow-hidden">
                    <img
                        className="w-14 h-36 left-14.75 top-7 absolute"
                        src={"http://localhost:4000" + product.image}
                        alt={product.name}
                    />
                    <h3 className="left-41.25 top-9.5 absolute justify-start text-white text-2xl font-normal font-['Monaco']">
                        {product.name}
                    </h3>
                    <p className="right-0 top-34.5 absolute justify-start text-white text-xl font-normal font-['Monaco']">
                        Price: {product.price}
                    </p>
                    <p className="right-0 top-40 absolute justify-start text-white text-xl font-normal font-['Monaco']">
                        Stock: {product.stock}
                    </p>
                </div>
            </div>
        </div>
    );
};