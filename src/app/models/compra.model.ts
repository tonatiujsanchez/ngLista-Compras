export class Compra{
    producto:string;
    categoria: string;
    cantidad: number;
    comprado: boolean;

    constructor(){
        this.comprado =  false;
        this.cantidad = 1;
    }
}