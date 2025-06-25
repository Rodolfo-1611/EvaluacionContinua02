const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularPago(horas, extras, faltas) {
    return (horas * 30) + (extras * 31) - (faltas * 30);
}

rl.question('Horas trabajadas: ', (horas) => {
    rl.question('Horas extras: ', (extras) => {
        rl.question('Faltas: ', (faltas) => {
            const pagoTotal = calcularPago(parseFloat(horas), parseFloat(extras), parseInt(faltas));
            console.log(`Pago total: S/. ${pagoTotal.toFixed(2)}`);
            rl.close();
        });
    });
});
