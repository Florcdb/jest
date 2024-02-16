/*### Test crear producto

El primer test que vamos a hacer es el de crear un producto. 
Para ello, vamos a usar la función **addProduct**. 
Esta función recibe dos parámetros: el nombre del producto y el precio. 
Si alguno de los dos parámetros no está definido, la función lanzará 
un error.
 Si el producto ya existe, la función también lanzará un error.*/

 const { resetProducts, 
    addProduct, 
    removeProduct, 
    getProducts, getProduct, updateProduct} = require('./product');


    describe('addProduct', () => {
        beforeEach(() => {
            resetProducts();
        });
    
        it('should show a price', () => {
            expect(() => addProduct('manzana', 3.24)).toBe('manzana=', 3.24);
        });
    
        it('should throw an Error if a is not a string', () => {
            expect(() => addProduct(1, 2)).toThrow('a must be an string');
        });
        it('should throw an Error if b is not a number', () => {
            expect(() => addProduct(1, 2)).toThrow('b must be an number');
        });
    });
    


 /*   Test eliminar producto
El siguiente test que vamos a hacer es el de eliminar un
 producto. Para ello, vamos a usar la función removeProduct.
  Esta función recibe un parámetro: el id del producto. 
  Si el producto no existe, la función lanzará un error.*/



  describe('removeProduct', () => {
    beforeEach(() => {
        resetProducts();
    });

    it('should remove a product', () => {
        addProduct('manzana', 3.24);
    
    })
    it('should throw an Error if the product does not exist', () => {
        expect(() => removeProduct(123)).toThrow('Product not found'); 
    });
});






 /* Test obtener producto
El siguiente test que vamos a hacer es el de obtener un producto. Para ello, 
vamos a usar la función getProduct. Esta función recibe 
un parámetro: el id del producto. Devuelve un objeto con los datos
 del producto. Si el producto no existe, la función lanzará un error.*/



/*Test actualizar producto
El siguiente test que vamos a hacer es el de actualizar un producto.
 Para ello, vamos a usar la función updateProduct.
 Esta función recibe tres parámetros: el id del producto,
  el nombre del producto y el precio del producto. Si el producto no existe, 
  la función lanzará un error. 
  Si el nombre o el precio no están definidos, la función actualizará el producto 
   con los datos que sí estén definidos.*/
