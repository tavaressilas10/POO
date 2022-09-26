export class pessoadois  {
    nome: string
    cpf: string
    rg: string
    cidade: string

    constructor(//(pode ser outro nome)
        nome: string,
        cpf: string,
        rg: string,
        cidade: string
    ) {                     //(se trocar troca aqui tbm)
        this.nome = nome
        this.cpf = cpf
        this.rg = rg
        this.cidade = cidade

    }
    verPessoa() {
        console.log(`Seu nome é ${this.nome}, CPF é ${this.cpf}, Rg ${this.rg}, Sua cidade é ${this.cidade}`)
    }
}

