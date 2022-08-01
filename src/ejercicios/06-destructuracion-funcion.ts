/*
    ===== Código de TypeScript =====
*/
interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 12719
}

function calculaISV(productos: Producto[]): [number, number] {
    let total = 0;
    productos.forEach(({ precio }) => {
        total += precio;
    })
    return [total, total * 1.96];
}

const articulos = [telefono, tableta];

const [total, isv] = calculaISV(articulos);

console.log('ISV', isv);
console.log('Total', total);

