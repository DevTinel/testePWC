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

const textEx2 = "Hello, World";

let caracteres = "";

for (let i = 0; i < textEx2.length; i++) {
    if (caracteres.indexOf(textEx2[i]) === -1) {
        caracteres += textEx2[i];
    }
}
console.log(caracteres);
