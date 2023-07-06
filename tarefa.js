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
