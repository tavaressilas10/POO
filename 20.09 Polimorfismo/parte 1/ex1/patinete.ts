
export class patinete{
    roda: string
    guidão: string
    freio: string

    constructor(
    roda:string,
    guidão:string,
    freio:string
    ){
        this.freio = freio
        this.roda = roda
        this.guidão = guidão
    }
        verCC(){
            console.log(`Seu patinete tem roda ${ this.roda}, \nseu patinete tem guidão ${ this.guidão}, \nSeu petinete tem Freio ${ this.freio}`)
        }
}
