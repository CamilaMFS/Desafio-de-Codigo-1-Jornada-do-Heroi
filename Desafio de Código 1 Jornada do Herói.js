var inputValues = ["2", "3"];
var currentInputIndex = 0;

// Função gets para obter as entradas
function gets() {
    var value = inputValues[currentInputIndex];
    currentInputIndex++;
    return value;
}

var posicaoInicial = parseInt(gets());
var totalPassos = parseInt(gets());

// TODO: Calcule a posição final do herói:
var posicaoFinal = posicaoInicial + totalPassos;

// Imprime a posição final
console.log("Posicao final do heroi:", posicaoFinal);