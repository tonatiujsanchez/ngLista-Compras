import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Compra } from '../../models/compra.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
  @Input() listadoCompras: Compra[] = [];
  @Input() tituloLista:string = 'Sin título'; 

  @Output() producto: EventEmitter<Compra>; 
  

  constructor() {
    this.producto = new EventEmitter();
   }
  
  mover( producto: Compra, idx:number ){
    producto.comprado = !producto.comprado;
    this.producto.emit( producto );
    this.eliminar( idx );
  }

  eliminar( idx:number){    
    this.listadoCompras.splice(idx, 1);
  }
  
}
