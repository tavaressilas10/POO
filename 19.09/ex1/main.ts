import { cliente } from "./cliente";

let clienteUm = new cliente ("Silas", "Rio", "22222222222", 22 ,"silas.@22gmail.com");

//console.log (clienteUm.verNome + "\n" + clienteUm.verLogin + "\n" + clienteUm.verTempo + "\n" + clienteUm.verSenha + ".")

clienteUm.verNome();
clienteUm.verNumero();
clienteUm.verIdade();
clienteUm.verEmail();



