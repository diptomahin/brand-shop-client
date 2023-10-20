
const Slider = () => {
    return (
        <div className="w-11/12 mx-auto mb-10">
            <div className="carousel w-11/12 mx-auto">
                <div id="item1" className="carousel-item  w-full">
                    <img src={'https://i.ibb.co/Qbx3zm7/Happy-Shopping.png'} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={'https://i.ibb.co/HNv4YTj/Happy-Shopping-2.png'} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={'https://i.ibb.co/Y8Q773Z/Happy-Shopping-1.png'} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-11/12 mx-auto py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Slider;