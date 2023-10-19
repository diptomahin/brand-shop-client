import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div  style={{textAlign:'center', marginTop: '40px'}}>
             <h1 className="text-center text-2xl text-red-400 font-bold">404 -Page not found</h1>
            <button className="btn bg-slate-500 text-[#FFF]"> <Link to="/">Go Back Home</Link></button>
            </div>
        </div>
    );
};

export default ErrorPage;