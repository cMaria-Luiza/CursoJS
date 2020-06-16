let num = [5,8,4,3,5];

console.log(`O valor tem ${num.length} posições.`);
console.log(`O primeiro valor é ${num[0]}`);

num.push(1);

console.log(`O novo vetor é ${num}`);


/*
for (let i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`);
}*/

for(let i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`);
}

num.sort();