import { Novo } from "./novo";
import { Velho } from "./velho";

let novoUm = new Novo ("Avenida das Américas, 75", "120.000", "30.000");
let velhoUm = new Velho ("Avenida das Américas, 75", "120.000", "20.000");

novoUm.adicional ();
velhoUm.desconto ();