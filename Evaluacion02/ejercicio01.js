const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function imprimirCuadrilatero(alto, ancho) {

  for (let i = 0; i < 1; i++) {
    console.log('*'.repeat(ancho));
  }

  for (let i = 0; i < alto - 2; i++) {
    console.log('*' + ' '.repeat(ancho - 2) + '*');
  }

  for (let i = 0; i < 1; i++) {
    if (alto > 1) {
      console.log('*'.repeat(ancho));
    }
  }
}

rl.question('Introduce el alto del cuadrilátero: ', (alto) => {
  rl.question('Introduce el ancho del cuadrilátero: ', (ancho) => {
    alto = parseInt(alto);
    ancho = parseInt(ancho);

    imprimirCuadrilatero(alto, ancho);

    rl.close();
  });
});
