// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é admin&quot; e a senha é &quot;senha123&quot;. Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

//solicita ao usuário um nome de usuário e uma senha. 

let username = prompt("Digite um nome de usuario: ");

//solicita ao usuario uma senha.

let senha = prompt("Digite suas senha: ");

//verifique se o nome de usuario e "adimin" e a senha e "senha123"

//caso sim -> exiba a mensagem de login bem sucedida
//caso nao -> exiba a mensagem de usuario ou senha incorreta


if ( username == "adimin" && senha == "senha123") {
    console.log("login bem sucedido")
} else {
    console.log("voce nao tem permisao de acesso!")
}