export class Pessoa {
    private nome: string;
    private dataNascimento: string;
    private ano: number;
    private altura: string;

constructor (
    nome: string,
    dataNascimento: string,
    ano: number,
    altura: string
    ) {
        this.nome = nome
        this.dataNascimento = dataNascimento
        this.ano = 2022 - ano
        this.altura = altura
    }
verNome () {
    console.log (`Nome: ${this.nome}.`)
}
verAltura () {
    console.log (`Altura: ${this.altura}.`)
}
verDataNascimento () {
     console.log (`Data de nascimento: ${this.dataNascimento}.`)
}
verAno () {
    console.log (`Idade: ${this.ano}.`)
}
}
