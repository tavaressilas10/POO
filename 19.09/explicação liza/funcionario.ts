import { pessoadois } from "./pessoadois"
export class funcionrio extends pessoadois{
    cod:string
    cargo:string
    ct:string
    salario:string
    idade:number
    
    constructor(
        nome:string,
        cpf:string,
        rg:string,
        cidade:string,
        cod:string,
        cargo:string,
        ct:string,
        salario:string,
        idade:number
    )
 {   
    super(nome, cpf, rg, cidade)
    this.cod = cod
    this.cargo = cargo
    this.ct = ct
    this.salario = salario
    this.idade = idade

}
verDados(){
    console.log(`O nome da pessoa é: ${this.nome}, \nO CPF é: ${this.cpf}, \nO RG é: ${this.rg}, \nE a sua cidade é: ${this.cidade}, \nSua idade é ${this.idade}`)
}
}

///exemplo com herança