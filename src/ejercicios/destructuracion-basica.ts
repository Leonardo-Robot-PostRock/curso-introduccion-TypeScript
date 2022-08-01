/*
    ===== Código de TypeScript =====
*/
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const autor = 'Linkin Park';

/*Destructuración de objetos*/
const { volumen, segundo, cancion, detalles: { autor: autorDetalle, anio: anioDetalle } } = reproductor;
// const { autor } = detalles;

// console.log('El volumen acutal es de: ', volumen);
// console.log('El segundo actual es de: ', segundo);
// console.log('La canción actual es de: ', cancion);
// console.log('El autor es: ', autorDetalle);
// console.log('Año de la canción: ', anioDetalle);

/*Destructuración de arreglos*/
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = dbz

console.log('Personaje 1:', dbz[0]);
console.log('Personaje 2:', dbz[1]);
console.log('Personaje 3:', p3);
