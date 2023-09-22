function veriParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

function calcular() {
    const numero1 = parseInt(document.getElementById("num1").value);
    const numero2 = parseInt(document.getElementById("num2").value);

    const parOuImparNumero1 = veriParOuImpar(numero1);
    const parOuImparNumero2 = veriParOuImpar(numero2);

    const soma = numero1 + numero2;
    const subtracao = numero1 - numero2;
    const multiplicacao = numero1 * numero2;
    
    let divisao;
    if (numero2 !== 0) {
        divisao = numero1 / numero2;
    }

    const resultadoFinal = veriParOuImpar(soma);

    const resultado = `
        O primeiro número é ${parOuImparNumero1} e o segundo número é ${parOuImparNumero2}.<br>
        Soma: ${soma}<br>
        Subtração: ${subtracao}<br>
        Multiplicação: ${multiplicacao}<br>
        Divisão: ${divisao}<br>
        O resultado final é ${resultadoFinal}.
    `;

    document.getElementById("resultado").innerHTML = resultado;
}