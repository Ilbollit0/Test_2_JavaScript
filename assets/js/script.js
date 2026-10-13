const persona = { nome: "Mario", cognome: "cognome", eta: 25, attivo: true };

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
console.log(mesi[mesi.lenght - 1]);
