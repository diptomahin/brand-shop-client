
const Choice = () => {
    return (
        <div className="w-11/12 mx-auto text-center rounded-xl p-10 mt-10 ">
            <h1 className="text-3xl  font-bold ">Why Choose <span className="text-[#004AAD]">Tech fusion</span>?</h1>
            <div className="grid grid-cols-2 gap-5 mt-8">
                <div className="bg-blue-400 rounded-lg p-8 text-white">
                    <p>
                        <span className="text-xl font-semibold"> Diverse Selection</span>: We take pride in our diverse selection of gadgets, ranging from the latest smartphones to cutting-edge smart home devices, wearables, and more.
                    </p>
                </div>

                <div className="bg-blue-400 rounded-lg p-8 text-white">
                    <p>
                        <span className="text-xl font-semibold"> Quality Assurance</span>: We source our products from reputable brands and ensure they meet the highest standards of quality and reliability.
                    </p>
                </div>
                <div className="bg-blue-400 rounded-lg p-8 text-white">
                    <p>
                        <span className="text-xl font-semibold">Expert Team</span>: Our team of tech enthusiasts and experts are here to assist you with product selection, technical inquiries, and any other questions you may have.


                    </p>
                </div>
                <div className="bg-blue-400 rounded-lg p-8 text-white">
                    <p>
                        <span className="text-xl font-semibold">Global Reach</span>: We proudly serve customers from all corners of the globe, connecting the world through technology.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Choice;