import { Animal } from "./Animal";
export class Cachorro extends Animal{
       
        barulho: string
   
    constructor(
        barulho: string,
        nome: string,
        idade: number,
        cor: string,
        especie: string,

    ){
        super(nome,idade,cor,especie)
        this.barulho = barulho;
    }
    correr(): void {
        console.log("correndo igual um cachorro")
    }
    cacar(): void {
        console.log("caçando igual um cachorro")
    }
    dormir(): void {
        console.log("dormindo como uma cachorro")
    }
    som(): void {
        console.log("fazendo som igual um cachorro")
    }

    
  
    }


    