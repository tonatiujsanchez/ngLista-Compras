import { Component, Output, EventEmitter } from '@angular/core';
import { Compra } from '../../models/compra.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() producto: EventEmitter<Compra>;

  cantidad:string = '';
  compra: Compra = {
    producto: '',
    categoria: '',
    cantidad: 1,
    comprado: false
  }
  
  constructor() {
    this.producto = new EventEmitter();
   }


  agregarCompra(){
    
    if( !this.compra.categoria || this.compra.producto.trim() === ""){
     return;
    }

    //Quitar los espacion en blanco al inicio y al final
    this.compra.producto =  this.compra.producto.trim();
    
    // Enitiendo el objeto "compra" al componente Padre
    this.producto.emit( this.compra );
    
    //Renicias el objeto "compra"
    this.compra = new Compra();
  }

}
