class ProductManager {
    static id = 0;
    constructor() {
        this.products = [];
    }


    addProduct(title, description, price, thumbnail, code, stock) {
        if(!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Los campos deben ser obligatorios");
            return;
        }

        if(this.products.some(item => item.code === code)) {
            console.log("El código no debe repetirse");
            return;
        }

        const newProduct = {
            id: ++ProductManager.id,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
        }
    }

    getProducts(){
        return this.products;
    }

    getProductById(idProduct){
        const getProduct = this.products.find(product => product.id === idProduct);

        if(getProduct){
            return getProduct;
        } else {
            console.error("Not found");
        }
    }
}

//Testing:

const newManager = new ProductManager();

console.log(newManager.getProducts());

newManager.addProduct("producto prueba", "este es un producto prueba", 200, "sin imagen", "abc123", 25);
newManager.addProduct("producto prueba2", "este es un producto prueba", 350, "sin imagen", "abc124", 30);
newManager.addProduct("producto prueba2", "este es un producto prueba", 350, "sin imagen", "abc124", 30);

console.log(newManager.getProducts());

newManager.getProductById(2);