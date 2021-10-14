import { Component } from '@angular/core';
import { Compra } from './models/compra.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listaCompras: Compra[] = [];
  listaComprados: Compra[]=[];
  

  agregarCompra( compra:Compra ){
    if( !compra.comprado ){
      this.listaCompras.push( compra );
    }else{
      this.listaComprados.push( compra );
    }
  }
}
