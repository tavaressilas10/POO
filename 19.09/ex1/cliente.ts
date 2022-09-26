export class cliente{
Nome: string
cidade: string
numero: string
idade: number
email: string

constructor(
Nome: string,
cidade: string,
numero: string,
idade: number,
email: string,
){
    this.Nome = Nome
    this.cidade = cidade
    this.email = email
    this.idade = idade
    this.numero = numero
}
verNome(){  
    console.log(`O Nome da sua conta é ${this.Nome}`)
}
verCidade(){  
    console.log(`Sua cidade è  ${this.cidade}`)
}
verEmail(){  
    console.log(`seu E-mail é  ${this.email}`)
}
verIdade(){  
    console.log(`Sua idade é  ${this.idade}`)
}
verNumero(){  
    console.log(`Seu numero  è  ${this.numero}`)
}
}

//exercicios feito por mim