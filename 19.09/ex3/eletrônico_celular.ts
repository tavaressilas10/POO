export class Eletrônico_celular{
    marca: string
    modelo:string
    cor:string
    imei:string

    constructor(
    marca: string,
    modelo:string,
    cor:string,
    imei:string
    ){
    this.marca = marca
    this.modelo = modelo
    this.cor = cor
    this.imei = imei
    }

    verMarca(){  
        console.log(`A Marca do seu celular ${this.marca}`)
    }
    verModelo(){  
        console.log(`O modelo do seu celular é ${this.modelo}`)
    }
    verCor(){  
        console.log(`A cor do seu celular é${this.cor}`)
    }
    verImei(){  
        console.log(`Sua idade é  ${this.imei}`)
    }
   
}

//exercicios feito por mim