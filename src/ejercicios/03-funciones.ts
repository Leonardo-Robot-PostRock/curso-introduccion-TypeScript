/*
    ===== Código de TypeScript =====
*/
function sumar(a: number, b: number): number {
    return (a + b);
}
// function sumar(a: number, b: number): string {
//     return (a + b).toString();
// }

const resultado = sumar(11, 7);

/*Arrow function */
const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2) {
    return numero * base;
}

const resulMultiplicar = multiplicar(10, 20);

console.log(('-').repeat(20));

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;

    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida:', this.pv);
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();