import { Expresion } from "../Abstracto/Expresion";
import {codigo} from '../GeneracionC3D/C3D';

export class Factor extends Expresion{
    
    constructor(private valor : any){
        super();
    }

    public ejecutar() : codigo{
        return { cd3: "", tmp:this.valor.toString() };
    }
    
}