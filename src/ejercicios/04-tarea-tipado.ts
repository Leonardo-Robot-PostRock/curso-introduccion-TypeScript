/*
    ===== Código de TypeScript =====
*/

interface Direccion {
    calle: string,
    pais: string,
    ciudad: string
}

interface superHerore {
    nombre: string,
    edad: number,
    direccion: Direccion,
    mostrarDireccion: () => string
}

const superHerore = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHerore.mostrarDireccion();
console.log(direccion);
