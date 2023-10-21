import { useLoaderData } from "react-router-dom";

const UpdateProducts = () => {
    const product = useLoaderData();
    const {_id, Description ,name, Brand, Type, rating, Price, Image } = product ;

    const handleUpdate =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const Brand = form.brand.value;
        const Type = form.type.value;
        const Description = form.description.value;
        const rating = form.rating.value;
        const Price = form.price.value;
        const Image = form.image.value;

        const updatedProduct = { name, Brand, Type, Description, rating, Price, Image }

        fetch(`https://brandshop-server-r7ko1my4a-mahin-ahmeds-projects.vercel.app/products/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }
    

    return (
        <div className="bg-blue-200 w-11/12 mx-auto rounded-lg p-20">
            <h2 className="text-3xl font-extrabold">Update : {name}</h2>
            <form onSubmit={handleUpdate}>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" defaultValue={Brand} placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" defaultValue={Type} placeholder="Product Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={Description} placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Prices</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={Price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" defaultValue={Image} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update" className="font-semibold btn btn-block text-[#1786F9] hover:text-white hover:bg-[#004AAD]" />

            </form>
        </div>
    );
};

export default UpdateProducts;