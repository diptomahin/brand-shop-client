
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';


const BrandProduct = ({ brandProduct }) => {
    const {_id ,name, Brand, Type, rating, Price, Image } = brandProduct
    return (
        <div className="card grid grid-cols-2 bg-base-100  shadow-xl">
            <figure><img src={Image} alt="Album" /></figure>
            <div className="card-body text-start">
                <h2 className="card-title">{name}</h2>
                <p>Category : {Type}</p>
                <p>Brand : {Brand}</p>
                <p>Rating : {rating}</p>
                <p>Price : {Price}</p>
                <div className="card-actions ">
                    <Link to={`/products/${_id}`}><button className="btn text-[#1786F9] hover:text-white hover:bg-[#004AAD]">Details</button></Link>
                    <Link to={`/update/${_id}`}><button className="btn text-[#1786F9] hover:text-white hover:bg-[#004AAD]">Update</button></Link>
                </div>
            </div>
        </div>
    );
};


BrandProduct.propTypes = {
    brandProduct: PropTypes.object
}

export default BrandProduct;