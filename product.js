const { resetProducts, 
     addProduct, 
     removeProduct, 
     getProducts, getProduct, updateProduct} = require('./product');

let products = [];
let id = 0;
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

function addProduct(name, price) {
    if (typeof name !== 'string' || !isNumber(price)) {
        throw new Error('El nombre debe ser una cadena y el precio debe ser un número');
    }

    const product = {
        id: ++id,
        name: name,
        price: price
    };
    
    return product;
}

function removeProduct(name, price)