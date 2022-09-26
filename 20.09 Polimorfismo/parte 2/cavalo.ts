import { Animal } from "./Animal";
export class cavalo extends Animal{
    cor:string;

constructor(
    cor: string,
    especie: string,
    idade: number,
    peso: string,
    nome: string

){
    super(especie,idade,peso,nome)
    this.cor = cor
}
correr(){
    console.log("correr igual um cavalo")
}
cacar() {
    console.log("caçando feito cavalo")
}
dormir(): void {
    console.log("dormindo igual um cavalo")
}
som(): void {
    console.log("fazendo o som de um cavalo")
}


}
