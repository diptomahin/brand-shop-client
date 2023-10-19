
import { PropTypes } from 'prop-types';
import Brand from './Brand';

const Brands = ({brands}) => {
    
    return (
        <div className=' w-11/12 mx-auto  text-center mt-10'>
            <h1 className='text-3xl  font-bold text-[#004AAD]'>Featured Brands</h1>
            <div className='grid grid-cols-1  md:grid-cols-2 gap-8'>
                {
                    brands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                }
            </div>
        </div>
    );
};


Brands.propTypes ={
    brands: PropTypes.array
}
export default Brands;