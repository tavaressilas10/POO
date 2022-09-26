import { Animal } from "./Animal";
import { Cachorro } from "./cachorro"; 
import { cavalo } from "./cavalo";
import { Preguiça } from "./preguiça";


let cachorro1 = new Cachorro ("Latindo", "Rex", 22, "azul", "viralata")
cachorro1.cacar();


let cavalo1 = new cavalo("amarelo","pe",8,"200 kg","pé de pano")
cavalo1.cacar();
cavalo1.correr();
cavalo1.som();
cavalo1.dormir();


let preguiça1 = new Preguiça("sobe","pg",6,"rosna","4 kg")
preguiça1.subir();
preguiça1.cacar();
preguiça1.dormir();
preguiça1.som();
