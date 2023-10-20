
import { PropTypes } from 'prop-types';


const BrandProduct = ({brandProduct}) => {
    const {Name, Type, Price, Image} = brandProduct
    return (
        <div className=' py-8'>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="mb-3">
                    <img  src={Image} alt="" className="rounded-xl w-full h-72" />
                </figure>
            </div>
            <div className='bg-[#004AAD] rounded-lg  text-white text-center'>
                <h1 className="text-3xl py-5  font-bold">{Name}</h1>
                <p>{Price}</p>
                <p>{Type}</p>
            </div>
        </div>
    );
};


BrandProduct.propTypes={
    brandProduct: PropTypes.object
}

export default BrandProduct;