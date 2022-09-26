export class Avião{
    assento: number;
    assento_preferencial: number;
    
    constructor(
        assento: number,
        assento_preferencial: number
    ){
        this.assento = assento
        this.assento_preferencial = assento_preferencial
    }

    verAssento(){
        console.log(`Assentos no geral ${this.assento}`)
    }

    verAssento_preferencial(){
        console.log(`Assentos Preferenciais ${this.assento_preferencial}`)
    }
}
//exercicios feito por mim