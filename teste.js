// MANIPULAÇÃO DE STRINGS

/** 1. Reverta  a ordem das palavras nas frases ,mantendo a ordem das palavras
 * a. Input: "Hello ,World! OpenAI is amazing."
 * b. Output:"amazing is OpenAI World!Hello."
 */

const text = "Hello ,World! OpenAI is amazing.";

console.log(text.split(" ").reverse().join(" "));
