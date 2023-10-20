import { useLoaderData } from "react-router-dom";
import About from "../Components/About";
import Banner from "../Components/Banner";
import Choice from "../Components/Choice";
import Brands from "../Components/Brands/Brands";

const Home = () => {
    const brands = useLoaderData() 
    return (
        <div>
            <Banner></Banner>
            <Brands brands={brands}></Brands>
            <About></About>
            <Choice></Choice>
        </div>
    );
};

export default Home;