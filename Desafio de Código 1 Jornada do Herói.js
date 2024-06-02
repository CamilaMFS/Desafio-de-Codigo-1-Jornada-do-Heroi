var inputValues = ["2", "3"];
var currentInputIndex = 0;

function gets() {
    var value = inputValues[currentInputIndex];
    currentInputIndex++;
    return value;
}

var posicaoInicial = parseInt(gets());
var totalPassos = parseInt(gets());

var posicaoFinal = posicaoInicial + totalPassos;

console.log("Posicao final do heroi:", posicaoFinal);
