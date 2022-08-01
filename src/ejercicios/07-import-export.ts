import { Producto, calculaISV } from './06-destructuracion-funcion';
/*
    ===== Código de TypeScript =====
*/


const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 10000
    },
    {
        desc: 'Telefono 2',
        precio: 15000
    }
];

const [total, isv] = calculaISV(carritoCompras);

console.log('Total', total);
console.log('ISV', isv);
