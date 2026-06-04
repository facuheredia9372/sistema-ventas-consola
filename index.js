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

function registrarVenta(idProducto, cantidad) {
    const producto = productos.find(p => p.id === idProducto);

    if (!producto) {
        console.log("Producto no encontrado");
        return;
    }

    if (producto.stock < cantidad) {
        console.log("Stock insuficiente");
        return;
    }

    producto.stock -= cantidad;
    console.log("Venta registrada correctamente");
}
function consultarStock() {
    console.log("\n=== STOCK ACTUAL ===");

    for (const producto of productos) {
        console.log(`${producto.nombre}: ${producto.stock} unidades`);
    }
}

agregarProducto("Pan", 1000, 20);
agregarProducto("Leche", 1500, 10);
agregarProducto("Azúcar", 1200, 15);

registrarVenta(1, 5);

listarProductos();
consultarStock();