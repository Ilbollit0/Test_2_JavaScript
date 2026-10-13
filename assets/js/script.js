const persona = { nome: "Mario", cognome: "Rossi", eta: 25, attivo: true };

console.table(persona);

persona.eta = 32;
console.log(persona);

persona.citta = "Roma";
console.log(persona);

const mesi = ["Gennaio", "febbraio", "Marzo", "Aprile", "Maggio"];
console.log(mesi);

const month = ["Gennaio", "febbraio", "Marzo", "Aprile", "Maggio"];
console.table(mesi);

console.log(mesi[0]);
console.log(mesi.length);
console.log(mesi[mesi.length - 1]);

mesi.push("Giugno");
console.log(mesi);

let tolto = mesi.pop();
console.log(mesi, "Mese rimosso: ${tolto}");

mesi.push("Giugno");
console.log(mesi);

let tolto2 = mesi.shift();
console.log(mesi, "Mese rimosso: ${tolto2}");

mesi.unshift('Giugno');
console.log(mesi);


const students = [
    {
        nome: 'Mario',
        cognome: 'Sturniolo'
    },
    {
        nome: 'Lello',
        cognome: 'Fassio'
    },
    {
        nome: 'Mirko',
        cognome: 'Sturniolo'
    },
];


console.log(students)
console.log(students[1].cognome)

