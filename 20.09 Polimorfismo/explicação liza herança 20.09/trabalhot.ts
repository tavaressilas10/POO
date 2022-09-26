import { Funcionario2 } from "./funcionario2";
import { pessoa2 } from "./pessoa2";

export class trabalhot implements pessoa2, Funcionario2 {
    nome: string;
    salario: number;
    verSalario(): void {
        throw new Error("Method not implemented.");
    }
    endereço: string;
    telefone: string;
    falar(): void {
        throw new Error("Method not implemented.");
    }
    andar(): void {
        throw new Error("Method not implemented.");
    }
    correr(): void {
        throw new Error("Method not implemented.");
    }


}