export class paciente{
    Ncadastro:number
    nome:string
    telefone:string
    sintoma:string
    convenio:string
    constructor(
        Ncadastro: number,
        nome: string,
        telefone: string,
        sintoma:string,
        convenio:string
    ){
        this.Ncadastro = Ncadastro
        this.telefone = telefone
        this.nome = nome
        this.sintoma = sintoma
        this.convenio = convenio
    }
        verHospital(){
            console.log(`seu numero de cadastro${this.Ncadastro}, \n
            seu telefone é ${this.telefone}, \n
            seu nome é ${this.nome}, \n
            seus sintomas são ${this.sintoma}, \n
            seu convenio é ${this.convenio}`)
        }

    
}