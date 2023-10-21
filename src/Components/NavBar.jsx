import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const NavBar = () => {


    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }



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

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);


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
                {
                    user ?
                        <div className="flex flex-col lg:flex-row gap-1">
                            <img className="rounded-3xl w-14 h-11" src={user.photoURL} alt="" />
                            <p className=" my-auto">{user.displayName}</p>
                            <button onClick={handleSignOut} className="btn text-[#1786F9] hover:text-white hover:bg-[#004AAD]">Sign Out</button>
                        </div>
                        :
                        <Link to='/login' className={'btn text-[#1786F9] hover:text-white hover:bg-[#004AAD]'}>Login</Link>
                }
                <label className="swap swap-rotate">

                    {/* this hidden checkbox controls the state */}
                    <input
                        type="checkbox"
                        onChange={handleToggle}
                        // show toggle image based on localstorage theme
                        checked={theme === "light" ? false : true}
                    />

                    {/* sun icon */}
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
            </div>
        </div>
    );
};

export default NavBar;