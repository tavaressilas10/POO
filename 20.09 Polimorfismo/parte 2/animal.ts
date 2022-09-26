export abstract class Animal{
    especie: string;
    idade: number;
    peso: string;
    nome: string;


constructor(
    especie: string,
    idade: number,
    peso: string,
    nome: string
)    {
    this.especie = especie;
    this.idade = idade;
    this.peso = peso;
    this.nome = nome;


}
correr():void{

}
cacar():void{

}
dormir():void{

}
som():void{

}
}