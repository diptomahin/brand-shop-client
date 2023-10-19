import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    const NavLinks = <>
        <li><NavLink className="py-3 font-bold" style={({ isActive }) => {
            return {
                color: isActive ? "white" : "black",
                backgroundColor: isActive ? "#004AAD" : "white",

            };
        }} to="/">Home</NavLink></li>
        <li><NavLink className="py-3 font-bold" style={({ isActive }) => {
            return {
                color: isActive ? "white" : "black",
                backgroundColor: isActive ? "#004AAD" : "white",

            };
        }} to="/addProducts">Add Products</NavLink></li>
        <li><NavLink className="py-3 font-bold" style={({ isActive }) => {
            return {
                color: isActive ? "white" : "black",
                backgroundColor: isActive ? "#004AAD" : "white",

            };
        }} to="/myCart">My Cart</NavLink></li>
        <li><NavLink className="py-3 font-bold" style={({ isActive }) => {
            return {
                color: isActive ? "white" : "black",
                backgroundColor: isActive ? "#004AAD" : "white",

            };
        }} to="/login">Login</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
                <Link to='/'>
                    <div className="flex text-center items-center">
                        <img style={{ width: '100px', height: '100px' }} src={'https://i.ibb.co/8X1wk2G/Avery-Davis-removebg-preview.png'} alt="" />
                        <h1 className="normal-case text-xl"><span className="text-[#004AAD] font-bold text-3xl">Tech Fusion</span></h1>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className={`navbar-end`}>
                <Link to='/login' className={'btn text-[#1786F9] hover:text-white hover:bg-[#004AAD]'}>Login</Link>
            </div>
        </div>
    );
};

export default NavBar;