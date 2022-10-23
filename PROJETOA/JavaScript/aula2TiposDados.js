let n = 2 * 3 + 5;
console.log(n, typeof n);

let d = 1.5;
console.log(d, typeof d);

let b = 82374692347563498576349n;
console.log(b, typeof b);

let s = 'Maria';
console.log(s, typeof s);

let l = n>10;
console.log(l, typeof l);

let f = n>17;
console.log(f, typeof f);

let ts = `Esta é uma string que possui várias linhas`;
console.log(ts, typeof ts);

let ts2 = `Olá ${s}`;
console.log(ts2);

let ts3 = `O resultado da multiplicação de ${n} por ${d} é ${n * d}`;
console.log(ts3);

let s3 = `O resultado da multiplicação de ` + n + ` por ` + d + ` é ` + n * d;
console.log(s3);

let v = null;
console.log(typeof v);