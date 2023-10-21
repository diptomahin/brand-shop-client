import { useLoaderData} from "react-router-dom";
import { saveProduct } from "../utility/localStorage";

const ProductDetails = () => {
     const product = useLoaderData();
     const {_id, Description ,name, Brand, Type, rating, Price, Image } = product ;
     

     const handleCart = () =>{
        saveProduct(_id);
       
     }
    return (
        <div className="card grid grid-cols-1 bg-base-100  shadow-xl py-10">
            <figure><img src={Image} alt="Album" /></figure>
            <div className="card-body text-center items-center">
                <h2 className="text-4xl my-5">{name}</h2>
                <div className="text-3xl grid grid-cols-1 gap-4">
                <p>{Description}</p>
                <p>Category : {Type}</p>
                <p>Brand : {Brand}</p>
                <p>Rating : {rating}</p>
                <p>Price : {Price}</p>
                </div>
                <div className="card-actions my-6 ">
                    <button onClick={handleCart} className="btn w-full border-blue-600 text-[#1786F9] hover:text-white hover:bg-[#004AAD]">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;