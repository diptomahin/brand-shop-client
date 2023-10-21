const getStoredProduct = () =>{
    const storedProducts = localStorage.getItem('products');
    if(storedProducts){
        return JSON.parse(storedProducts);
    }
    return [];
}



const saveProduct = id => {
    const storedProduct = getStoredProduct();
    const exist = storedProduct.find(id => id == id)
    if(!exist){
        storedProduct.push(id);
        localStorage.setItem('products', JSON.stringify(...storedProduct));
        console.log("product added", id, storedProduct)
    }

}
 export {saveProduct , getStoredProduct }