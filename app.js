/* // Ejercicio 1
const bubbleSortDescending = (arr) => {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i ++) {
            if (arr[i] < arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}
// Ejercicio 1 - Simplificado
const sortDescendingSimplified = (array) => {
    return array.sort((a, b) => b - a);
}

const arrayToSort = [9,3,1,6,5,88,-1,2,7];
console.log(bubbleSortDescending(arrayToSort));
console.log(sortDescendingSimplified(arrayToSort)); */

/* // Ejercicio 2
const sortCharacters = (arrChar) => {
    return arrChar.sort();
}
const arrayOfChar = ['b','h','w','e','a'];
console.log(sortCharacters(arrayOfChar)); */

/* // Ejercicio 3
class Alumno {
    constructor (nombre, calificaciones) {
        this.nombre = nombre,
        this.calificaciones = calificaciones
    }

    getAverage() {
        let sum = 0;
        for (let i = 0; i < this.calificaciones.length; i ++) {
            sum += this.calificaciones[i];
        }
        return sum/this.calificaciones.length;
    }
}

class Salon {
    constructor () {
        this.students = [];
    }
    addStudents(nombre, calificaciones) {
        let newStudent = new Alumno(nombre, calificaciones);
        this.students.push(newStudent);
    }
    sortAverages() {
        return this.students.sort((a, b) => b.getAverage() - a.getAverage());
    }
}
// Ejercicio 3 - Testeo
const miSalon = new Salon();
miSalon.addStudents('Pedro', [7, 9, 8, 10, 7]);
miSalon.addStudents('Paco', [5, 7, 9, 10, 8]);
miSalon.addStudents('Marta', [9, 9, 8, 10, 8]);
miSalon.addStudents('John', [8, 6, 8, 9, 10]);
miSalon.addStudents('Mike', [7, 9, 7, 8, 6]);

console.log(miSalon.students);
console.log(miSalon.students[0].nombre + ' average: ' + miSalon.students[0].getAverage());
console.log(miSalon.students[1].nombre + ' average: ' + miSalon.students[1].getAverage());
console.log(miSalon.students[2].nombre + ' average: ' + miSalon.students[2].getAverage());
console.log(miSalon.students[3].nombre + ' average: ' + miSalon.students[3].getAverage());
console.log(miSalon.students[4].nombre + ' average: ' + miSalon.students[4].getAverage());

console.log(miSalon.sortAverages());
console.log(miSalon.sortAverages()[0].nombre + ' average: ' + miSalon.sortAverages()[0].getAverage());
console.log(miSalon.sortAverages()[1].nombre + ' average: ' + miSalon.sortAverages()[1].getAverage());
console.log(miSalon.sortAverages()[2].nombre + ' average: ' + miSalon.sortAverages()[2].getAverage());
console.log(miSalon.sortAverages()[3].nombre + ' average: ' + miSalon.sortAverages()[3].getAverage());
console.log(miSalon.sortAverages()[4].nombre + ' average: ' + miSalon.sortAverages()[4].getAverage()); */

/* // Ejercicio 4
const sortWordsByLength = (array) => {
    return array.sort((a, b) => a.length - b.length);
}
const entrada = ['adios','hola','maximo','uno','despedida'];
console.log(sortWordsByLength(entrada)); */

// Ejercicio 5
const sortCoordinates = array => array.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));

const coordinates = [[7,3],[2,2],[1,0],[4,3]];
console.log(sortCoordinates(coordinates));