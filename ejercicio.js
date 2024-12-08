
//1. Definición de la Clase Pedido con nombre, contenido y precio. Constructor

class Pedido {
    nombre;
    contenido;
    precio;
   
    constructor(nombre, contenido, precio) {
      this.nombre = nombre;
      this.contenido = contenido;
      this.precio = precio;
    }    
}

//2. Datos de los Objetos: definir 3 arrays para representar productos, tipos y precios.

let nombres = ['Burger Clásica', 'Burger BBQ', 'Burger Veggie'];
let tipos = ['salsa especial', 'cebolla, tomate y lechuga', 'salsa 1000 islas']
let precios = [8.990, 10.490, 9.790];
  
//3.1 Funciones Auxiliares: seleccionarAleatorio(array)

function seleccionarAleatorio(array) {

const index =  Math.floor(Math.random() * array.length);
return array[index];
}
                             
// 3.2 Función que simula una espera

const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 4. Actualización del Estado del Pedido:

function actualizarEstadoPedido(pedido, estado) {
console.log(`Pedido: ${pedido} ${estado}`)
}

//5. Seguimiento del Proceso del Pedido: función asincrónica seguirProcesoPedido(pedido) 

const seguirProcesoPedido = async (pedido) => {
    console.log(`Pedido ${pedido}: Recibido`);
    await esperar(1000); // Espera 1 segundo

    console.log(`Pedido ${pedido}: Preparando`);
    await esperar(3000); // Espera 3 segundos

    console.log(`Pedido ${pedido}: Finalizado`);
    await esperar(1000); // Espera 1 segundo

    console.log(`Pedido ${pedido}: Entregado`);
    await esperar(1000); // Espera 1 segundo

    console.log(`Pedido ${pedido} ha sido entregado.`);
};

//6. Realización del Pedido: realizarPedido(pedido)

const realizarPedido = async (pedido) => {
    
    const retraso = Math.floor(Math.random() * 10) +1;

    await new Promise(resolve => setTimeout(resolve, retraso *1000))

    return console.log(`Pedido ${pedido} enviado con éxito. retraso ${retraso} segundos`)
    
}

//7. Generación de Pedidos Aleatorios:generarPedidoAleatorio(i)

function generarPedidoAleatorio(i) {
    
    const nombreAleatorio = seleccionarAleatorio(nombres);
    const tipoAleatorio = seleccionarAleatorio(tipos);
    const precioAleatorio = seleccionarAleatorio(precios);

    const pedido = new Pedido(nombreAleatorio, tipoAleatorio, precioAleatorio);
    return pedido   
}

// 8. Manejo de Pedidos: manejarPedido(i) 

const manejarPedido = async (i) => {

    // Generar pedido aleatorio

    const pedido = generarPedidoAleatorio(i);
    console.log(`Generando pedido ${pedido.nombre} con ${pedido.contenido} a ${pedido.precio}`)
   
    // Simular la realización del pedido

   const mensajeRealizar = await realizarPedido(i);
   console.log(mensajeRealizar)

    // Simular el seguimiento del proceso del pedido

    await seguirProcesoPedido(i);
};

9// Generación Continua de Pedidos:

function generarPedidosContinuamente() {
    let i = 1;
    setInterval(async () => {

        // Genera un nuevo retraso aleatorio para cada pedido

        const retraso = Math.floor(Math.random() * 10 + 1)
        console.log(`Esperando ${retraso} segundos antes de generar el próximo pedido...`);

        // Espera el tiempo aleatorio antes de generar el siguiente pedido

        await esperar(retraso * 1000)

        //Manejar el nuevo pedido

        await manejarPedido(i); 
        i++;  
    }, 1000);
}
generarPedidosContinuamente();