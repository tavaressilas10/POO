import { ControleRemoto } from "./controleRemoto";

let controleUm = new ControleRemoto (25, 40, "100%");

controleUm.verEstado ();
controleUm.proximoCanal ();
controleUm.trocandoCanal ();
controleUm.aumentandoVolume ();