const prompt = require("prompt-sync")();
const inventario = [];

function agregarProducto() {
  const nombre = prompt("Ingrese el nombre del producto:");
  const precio = parseFloat(prompt("Ingrese el precio del producto:"));
  const cantidad = parseInt(
    prompt("Ingrese la cantidad disponible del producto:")
  );

  inventario.push({ nombre, precio, cantidad });
  console.log("Producto agregado al inventario.");
}

function eliminarProducto() {
  let index = parseInt(
    prompt("Ingrese el índice del producto que desea eliminar:")
  );
  index = index - 1;

  if (index >= 0 && index < inventario.length) {
    inventario.splice(index, 1);
    console.log("Producto eliminado del inventario.");
  } else {
    console.log("Índice inválido. Por favor, ingrese un índice válido.");
  }
}

function mostrarInventario() {
  console.log("Inventario:");
  if (inventario.length === 0) {
    console.log("El inventario está vacío.");
  } else {
    inventario.forEach((producto, index) => {
      console.log(
        `Índice: ${index + 1}, Nombre: ${producto.nombre}, Precio: ${
          producto.precio
        }, Cantidad: ${producto.cantidad}`
      );
    });
  }
}

function gestionarInventario() {
  let opcion;
  do {
    opcion = prompt(`
        \n1. Agregar nuevo producto
        2. Eliminar un producto
        3. Mostrar inventario
        4. Salir
        `);

    switch (opcion) {
      case "1":
        agregarProducto();
        break;
      case "2":
        eliminarProducto();
        break;
      case "3":
        mostrarInventario();
        break;
      case "4":
        console.log("Saliendo del programa...");
        break;
      default:
        console.log("Opción no válida. Por favor, elija una opción válida.");
    }
  } while (opcion !== "4");
}

gestionarInventario();
