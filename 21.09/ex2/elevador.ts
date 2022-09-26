export class Elevador {
    terreo: number;
    totalAndares: number;
    capacidadeElevador: number;
    quantidadePessoas: number;

    constructor (
        terreo: number,
        totalAndares: number,
        capacidadeElevador: number,
        quantidadePessoas: number
    ) {
        this.terreo = terreo
        this.totalAndares = totalAndares
        this.capacidadeElevador = capacidadeElevador
        this.quantidadePessoas = quantidadePessoas
    }
inicializa () {
    console.log (`Capacidade: ${this.capacidadeElevador}.\nTotal de andares: ${this.totalAndares}.\nAndar: ${this.terreo}.`)
}
entra () {
    this.quantidadePessoas = 1
    this.capacidadeElevador = this.capacidadeElevador - 1
    console.log (`Entrando pessoas.\nQuantidades de pessoas no elevador: ${this.quantidadePessoas}.`)
    console.log (`Capacidade: ${this.capacidadeElevador}.\nSubindo.`)
}
sobe () {
    this.terreo = 1
    console.log (`Andar: ${this.terreo}.`)
}
sai () {
    this.quantidadePessoas = this.quantidadePessoas - 1
    this.capacidadeElevador = this.capacidadeElevador + 1
    console.log (`Saindo pessoas.\nQuantidades de pessoas no elevador: ${this.quantidadePessoas}.\nCapacidade: ${this.capacidadeElevador}.\nDescendo.`)
}
desce () {
    this.terreo = 0
    console.log (`Andar: ${this.terreo}.`)
}
}