//Objetos
class Mates {
    constructor(mate) {
        this.id = mate.id;
        this.tipo = mate.tipo;
        this.material = mate.material;
        this.precio = mate.precio;
        this.cantidad = 1;
        this.precioTotal = mate.precio;
    }

    agregarCelular() {
        this.cantidad++;
    }

    actualizarPrecio() {
        this.precioTotal = this.precio * this.cantidad;
    }
}
//Array
const mates = [{
        id: 0,
        tipo: 'Mate Imperial - Cincelado con Bronce',
        material: 'Cuero',
        precio: 9970
    },
    {
        id: 1,
        tipo: 'Mate Imperial - Virola Lisa',
        material: 'Cuero',
        precio: 7550

    },
    {
        id: 2,
        tipo: 'Mate Imperial - Con Base y bolitas de Alpaca',
        material: 'Cuero',
        precio: 12950
    },
    {
        id: 3,
        tipo: 'Mate Camionero Imperial Premium',
        material: 'Cuero',
        precio: 11000
    },
    {
        id: 4,
        tipo: 'Mate Imperial Cincelado Personalizado',
        material: 'Cuero',
        precio: 10500
    },
    {
        id: 5,
        tipo: 'Mate Imperial con Virola Personalizada',
        material: 'Cuero',
        precio: 9800

    },
    {
        id: 6,
        tipo: 'Mate Imperial Virola Cincelada',
        material: 'Madera',
        precio: 5900

    },
    {
        id: 7,
        tipo: 'Mate Imperial Virola Cincelada en la Base',
        material: 'Madera',
        precio: 10000
    },
    {
        id: 8,
        tipo: 'Mate Torpedo -  Cincelado con Bronce',
        material: 'Cuero',
        precio: 13000

    },
    {
        id: 9,
        tipo: 'Mate Camionero -  Cincelado con Bronce',
        material: 'Madera',
        precio: 74500
    },
    {
        id: 10,
        tipo: 'Mate Torpedo -  Cincelado con Oro',
        material: 'Cuero',
        precio: 14500
    },
    {
        id: 11,
        tipo: 'Mate Camionero Virola Cincelada de Bronce',
        material: 'Cuero',
        precio: 8600
    }
];

let carrito = [];
let precioTotal;

//Funciones
let nombre = prompt('Hola ingrese su nombre por favor.');

function saludo() {
    alert(`Bienvenido a Matencio ${nombre}, selecciona tus productos!`);
}

function catalogo() {
    let listaMates = "";

    for (const mate of mates) {
        listaMates += `${mate.id}: ${mate.tipo} ${mate.material} $${mate.precio} \n`;
    }

    let idProducto = prompt(`Escribi el codigo del producto que desees agregar al carrito, cuando tengas tu compra escribi "FIN" para finalizar!! 
    ${listaMates} \n`);


    while (idProducto !== "FIN") {
        let mateSelec = carrito.find((element) => element.id == idProducto);

        if (mateSelec) {
            let index = carrito.findIndex((element) => element.id === mateSelec.id);
            carrito[index].agregarCelular();
            carrito[index].actualizarPrecio();
            alert(`Agregaste otro ${carrito[index].tipo}, al carrito!!
            Ya tenes ${carrito[index].cantidad} Unidades`);
            console.table(carrito);
        } else {
            carrito.push(new Mates(mates[idProducto]));
            alert(`Agregaste ${mates[idProducto].tipo} al carrito de compras!!`);
            console.table(carrito);
        }

        idProducto = prompt(`Queres seguir comprando?? Escribi el codigo del producto que desees agregar al carrito o escribi "FIN" para finalizar tu compra! 
        ${listaMates}`);
    }
}

function precioFinal() {
    let precioTotal = 0;
    for (const item of carrito) {
        precioTotal += item.precioTotal;
    }
    return precioTotal;
}

//Invoco las funciones
saludo();
catalogo();
precioTotal = precioFinal();

alert(`El total a pagar  es $${precioTotal}.
Muchas gracias por tu compra, que tengas un buen dia!`);
console.table(carrito);