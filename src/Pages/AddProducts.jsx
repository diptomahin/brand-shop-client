
const AddProducts = () => {
    const handleAddProducts = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const Brand = form.brand.value;
        const Type = form.type.value;
        const Description = form.description.value;
        const rating = form.rating.value;
        const Price = form.price.value;
        const Image = form.image.value;

        const newProduct = { name, Brand,  Type, Description,  rating, Price, Image }

        console.log(newProduct);
    }
        return (
            <div className="bg-blue-200 w-11/12 mx-auto rounded-lg p-20">
                <h2 className="text-3xl font-extrabold">Add a Product</h2>
                <form onSubmit={handleAddProducts}>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" placeholder="Product Category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Prices</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Products" className="font-semibold btn btn-block text-[#1786F9] hover:text-white hover:bg-[#004AAD]" />

                </form>
            </div>
        );
    };

    export default AddProducts;