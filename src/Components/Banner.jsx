
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 text-white w-11/12 mx-auto rounded-xl">
        <div className="hero-content flex-col lg:flex-row mx-4">
           <div>
           <img  src={'https://i.ibb.co/rFbSXcC/41392-4-gadgets-free-download-png-hd.png'} className="max-w-sm rounded-lg" />
           </div>
          <div>
            <h1 className="text-5xl font-bold text-[#004AAD]">All  <span className="">Tech</span> In One Place</h1>
            <p className="py-6 text-xl font-bold">Welcome to Tech Fusion, your ultimate online destination for all things gadget-related. We have meticulously curated a diverse and exciting array of gadgets to elevate your tech experience.</p>
          </div>
        </div>
      </div>
    );
};

export default Banner;