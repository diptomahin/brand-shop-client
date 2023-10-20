import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { useParams } from 'react-router-dom';
import BrandProduct from "../Components/BrandProduct";

const BrandProducts = () => {
    const brands = useLoaderData()
    const { id } = useParams();
    const idInt = parseInt(id);
    const brand = brands.find(brand => brand.id == idInt)

    const [brandProducts, setBrandProducts] = useState([]);

    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => setBrandProducts(data));
    }, []);
    console.log(brandProducts)
    return (
        <div className="w-11/12 mx-auto text-center">
            <h2>Here are the products of : {brand.brandName}  </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {
                brandProducts.filter(filteredBrandProducts =>filteredBrandProducts.BrandId == idInt).map(brandProduct => (
                   <BrandProduct key={brandProduct.ProductId} brandProduct={brandProduct}></BrandProduct>
                ))
            }
            </div>
        </div>
    );
};

export default BrandProducts;