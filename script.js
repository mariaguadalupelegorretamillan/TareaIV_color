//Funcion para cambiar el color en una página web
function changeColor(event) {
    document.getElementById("main").style.backgroundColor = event.value;
}

//Array para ejemplos de los tipos de filtros de array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Array para el ejemplo de agrupar
const items = [
    { pen: 21 },
    { soda: 37 },
    { backpack: 45 },
    { usb: 12 },
    { usb: 45 },
    { soda: 17 },
    { backpack: 56 },
    { usb: 63 }
];

//Sintaxis del array para agrupar
const grouped = items.reduce((acc, item) => {
    for (let prop in item) {
        if (acc.hasOwnProperty(prop)) acc[prop] += item[prop];
        else acc[prop] = item[prop];
    }
    return acc;
}, {});

//Sintaxis para los tipos de arrayfilter
const numbersPlusTen = numbers.map((number) => number + 10);
const greaterThanFive = numbers.filter((number) => number > 5);
const numberFive = numbers.find((number) => number === 5);
const indexOfFive = numbers.findIndex((number) => number === 5);

/*for (let number of numbers) {
    //numbersPlusTen.push(number + 10);
}*/

//Función promesa y sintaxís
const promiseFuncion = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 10) {
            setTimeout(() => {
                resolve(`Success number:${number}`);
            }, 1000);
        } else {
            reject(`Error el numero ${number} es menor a 10`);
        }
    });
};

//Ejecucion de las promesas
promiseFuncion(05).then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("finally");
    });

//console.log(numbersPlusTen);
//console.log(numbersThanFive);
//console.log(numberFive);
//console.log(grouped);
//console.log(promiseFuncion);