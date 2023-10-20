import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { useParams } from 'react-router-dom';
import BrandProduct from "../Components/BrandProduct";
import Slider from "../Components/Slider";

const BrandProducts = () => {
    const brands = useLoaderData()
    const { id } = useParams();
    const idInt = parseInt(id);
    const brand = brands.find(brand => brand.id == idInt)
    // console.log(brand)
    const [brandProducts, setBrandProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setBrandProducts(data));
    }, []);
    console.log(brandProducts)
    return (
        <div>
            <Slider></Slider>
            <div className="w-11/12 mx-auto text-center">
            <h2 className="text-4xl text-[#004AAD] font-bold"> {brand.brandName}  </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {
                brandProducts.filter(filteredBrandProducts =>filteredBrandProducts.Brand == brand.brandName).map(brandProduct => (
                   <BrandProduct key={brandProduct._id} brandProduct={brandProduct}></BrandProduct>
                ))
            }
            </div>
        </div>
        </div>
    );
};

export default BrandProducts;