/**
 * Escreva uma aplicacao executavel ,na linguagem de programacao de sua escolha,incluindo casos de teste,ultilizando
 * os exemplos informados acima
 */

function inverterFrase(string) {
    return string.split("").reverse().join("");
}

function removerCaracteresDuplicados(string) {
    let caracteres = "";

    for (let i = 0; i < string.length; i++) {
        if (caracteres.indexOf(string[i]) === -1) {
            caracteres += string[i];
        }
    }
    return caracteres;
}

function capitalizarPrimeiraLetra(string) {
    let frases = string.split(".");

    let fraseCapitalizada = frases.map((frase) => {
        frase = frase.trim();

        if (frase.length == 0) {
            return frase;
        }
        return frase.charAt(0).toLocaleUpperCase() + frase.slice(1);
    });
    return fraseCapitalizada.join(".");
}
console.log(
    capitalizarPrimeiraLetra("hello. how are you? i'm fine,thank you.")
);
