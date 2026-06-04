let productos = [];

function agregarProducto(nombre, precio, stock) {
    const producto = {
        id: productos.length + 1,
        nombre,
        precio,
        stock
    };

    productos.push(producto);
}

function listarProductos() {
    console.log("\n=== PRODUCTOS ===");

    for (const producto of productos) {
        console.log(
            `${producto.id} - ${producto.nombre} - $${producto.precio} - Stock: ${producto.stock}`
        );
    }
}

agregarProducto("Pan", 1000, 20);
agregarProducto("Leche", 1500, 10);
agregarProducto("Azúcar", 1200, 15);

listarProductos();