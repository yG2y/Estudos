let frutas = ['laranja', 'maçã', 'banana'];
console.log(frutas);
console.log(frutas[2]);
console.log(frutas[1]);
console.log(frutas[0]);

let numeros = [1, 5, 3, 8, 0, 6, 9];
console.log(numeros);

let misturado = ['José', 35, true];
console.log(misturado);

// Inserções

frutas[2] = 'limão';
console.log(frutas);
frutas[3] = 'pêra';
console.log(frutas);
console.log(frutas.length);

frutas[6] = 'abacaxi';
console.log(frutas);
console.log(frutas.length);
console.log(typeof frutas[4]);
console.log(frutas[4]);

frutas = []; // ou frutas = new Array();
frutas[frutas.length] = "melão";
console.log(frutas);
frutas[frutas.length] = "melancia";
console.log(frutas);
frutas[frutas.length] = "uva";
console.log(frutas);
frutas[frutas.length] = "morango";
console.log(frutas);

for(let i=0; i<frutas.length; i++){
    console.log(i, frutas[i]);
}

frutas.sort();
console.log(frutas);

frutas.push('banana');
console.log(frutas);

let f = frutas.pop();
console.log(f);
console.log(frutas);

frutas.unshift('banana');
console.log(frutas);

let g = frutas.shift();
console.log(g);
console.log(frutas);

frutas.forEach(f => console.log(f));

let frutas2 = frutas.map(
    (f) => f.toLocaleUpperCase()
);
console.log(frutas);
console.log(frutas2);
