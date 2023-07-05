// MANIPULAÇÃO DE STRINGS

/** 1. Reverta  a ordem das palavras nas frases ,mantendo a ordem das palavras
 * a. Input: "Hello ,World! OpenAI is amazing."
 * b. Output:"amazing is OpenAI World!Hello."
 */

// const textEx1 = "Hello ,World! OpenAI is amazing.";

// console.log(text.split(" ").reverse().join(" "));

/**
 * 2. Remova todos os caracteres duplicados da string abaixo
 * a. Input: "Hello, World!"
 * b. Output: "Helo,Wrd!"
 */

// const textEx2 = "Hello, World";

// let caracteres = "";

// for (let i = 0; i < textEx2.length; i++) {
//     if (caracteres.indexOf(textEx2[i]) === -1) {
//         caracteres += textEx2[i];
//     }
// }
// console.log(caracteres);

/**Encontre  a substring palindroma mais longa na string abaixo
 * String Palindromo definição : Uma palavra é dita palindroma quando
 * possui o mesmo significado se lida da esquerda para a direita ou
 * da direita para esqurda
 * a. Input: "babad"
 * b. Output: "bab"(Observação : pode haver várias saídas válidas ,você só precisa retomar
 * uma delas.))
 */

let textEx3 = "babad";

/**
 * Coloque em maiuscula a primeira letra de cada frase na string
 * a. Input: "Hello. how are you? i'm fine,thank you."
 * b. Output: "Hello.How are you?"I'm fine,thank you.""
 */

function capitalizarPrimeiraLetra() {
    let textEx4 = "hello. how are you? i'm fine,thank you.".split(".");

    let fraseCapitalizada = textEx4.map((frase) => {
        frase = frase.trim();

        if (frase.length == 0) {
            return frase;
        }
        return frase.charAt(0).toLocaleUpperCase() + frase.slice(1);
    });
    return fraseCapitalizada.join(".");
}
console.log(capitalizarPrimeiraLetra());
