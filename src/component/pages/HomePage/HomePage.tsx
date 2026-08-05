import { useState, useEffect } from "react";
import { getProducts } from "../../../services/product.service";
import football from "../../../assets/Football.svg";
import heart from "../../../assets/mdi_heart-outline.svg";


type Product = {
    id: number;
    image: string;
    name: string;
    price: string;
    stock: number;
}

export const HomePage = () => {


    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
                console.log(data);
            } catch (err: unknown) {
                const message =
                    err instanceof Error ? err.message : "Failed to fetch products";
                setError(message);
                console.error(err);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="home-page">
            <header className="box-content flex justify-center">
                <img
                    className="Football w-full"
                    src={football}
                    alt="en fodbold spiller sparker en bold"
                />
            </header>
            <div className="box-content mt-20 ">
                {products.slice(0, 3).map((product) => (
                    <div key={product.id} data-property-1="Default" className="w-auto h-50 relative border-b border-lime-400/50 overflow-hidden">

                        <img className="w-14 h-36 left-14.75 top-7 absolute" src={"http://localhost:4000" + product.image} alt={product.name} />
                        <h3 className="left-41.25 top-9.5 absolute justify-start text-white text-2xl font-normal font-['Monaco']">{product.name}</h3>
                        <p className="right-0 top-34.5 absolute justify-start text-white text-xl font-normal font-['Monaco']">Price: {product.price}</p>
                        <p className="right-0 top-40 absolute justify-start text-white text-xl font-normal font-['Monaco']">Stock: {product.stock}</p>
                        <p className="error text-red-600 ">{error}</p>

                        <div data-property-1="Default" className="size-6 left-215 top-11 absolute">
                            <img src={heart} alt="Favorit hjerte" className="size-5 left-90 top-0.75 absolute" />
                        </div>
                    </div>

                ))}
            </div>

        </div >


    )
}