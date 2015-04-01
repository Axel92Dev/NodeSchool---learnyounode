var sum = 0;

for (var i = 0; i < (process.argv.length -2); i++) {
    sum += Number(process.argv[2+i]);
}

console.log(sum);
