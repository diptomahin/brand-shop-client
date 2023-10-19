
import { PropTypes } from 'prop-types';


const Brand = ({ brand }) => {
    const { brandName, img } = brand;
    return (
        <div className=' py-8'>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="mb-3">
                    <img  src={img} alt="" className="rounded-xl w-full h-72" />
                </figure>
            </div>
            <div className='bg-[#004AAD] rounded-lg text-center'>
                <h1 className="text-3xl py-5  font-bold text-white">{brandName}</h1>
            </div>
        </div>
    );
};


Brand.propTypes = {
    brand: PropTypes.object
}
export default Brand;