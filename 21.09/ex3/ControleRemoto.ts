import { Televisao } from "./televisao";

export class ControleRemoto extends Televisao{
    bateria: string;

constructor (
    canal: number,
    qualVolume: number,
    bateria: string
) {
    super(canal, qualVolume)
    this.bateria = bateria
}
verEstado () {
    console.log ("~ligando a TV~")
    console.log (`Verificando volume atual: ${this.qualVolume}.`)
    console.log (`Verificando canal atual: ${this.canal}.`)
    console.log (`Vereficando bateria do controle: ${this.bateria}.`)
}
proximoCanal () {
    console.log (`~trocando para o próximo canal~`)
    this.canal = this.canal +1
    console.log (`Canal atual: ${this.canal}.`)
    console.log (`~trocando para o próximo canal~`)
    this.canal = this.canal +1
    console.log (`Canal atual: ${this.canal}.`)
}
trocandoCanal () {
    console.log (`~trocando para canal 37~`)
    this.canal = this.canal +10
    console.log (`Canal atual: ${this.canal}.`)
}
aumentandoVolume () {
    console.log (`~aumentando volume~`)
    this.qualVolume = this.qualVolume + 1
    console.log (`Volume atual: ${this.qualVolume}.`)
    this.qualVolume = this.qualVolume + 1
    console.log (`Volume atual: ${this.qualVolume}.`)
    this.qualVolume = this.qualVolume + 1
    console.log (`Volume atual: ${this.qualVolume}.`)
}
}