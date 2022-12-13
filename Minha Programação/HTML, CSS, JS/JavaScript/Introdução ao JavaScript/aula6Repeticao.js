let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
console.log('-------------------------------------');

i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
console.log('-------------------------------------');

for (i=0; i < 15; i++) {
    if (i==7) break;
    console.log(i);
}
console.log('-------------------------------------');

for (i=0; i < 15; i+=2) {
    if (i==8) continue;
    console.log(i);
}
console.log('-------------------------------------');

i = 2;
i += 3; // i = i+3
console.log(i);

i *= 2; // i = i*2
console.log(i);

i %= 3; // i = i%3
console.log(i);