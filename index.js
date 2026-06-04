let productos = [];

function agregarProducto(nombre, precio, stock) {
    const producto = {
        id: productos.length + 1,
        nombre,
        precio,
        stock
    };

    productos.push(producto);

    console.log("Producto agregado correctamente");
}

agregarProducto("Pan", 1000, 20);

console.log(productos);