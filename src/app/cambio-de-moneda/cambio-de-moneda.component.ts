import { Component } from '@angular/core';

@Component({
  selector: 'app-cambio-de-moneda',
  templateUrl: './cambio-de-moneda.component.html',
  styleUrls: ['./cambio-de-moneda.component.css']
})
export class CambioDeMonedaComponent {
  numero1:number=0;
  calculo:number=0;
  moneda:string="";
  mensaje:string="";


  calcular():void{
    switch (this.moneda) {
      case "YEN":
        this.calculo = this.numero1 * 146.63;
        this.mensaje= "Son " + this.calculo + " yenes de Japon";
      break;

      case "DOLAR-EEUU":
        this.calculo = this.numero1 + 1.10;
        this.mensaje = "Son " + this.calculo + " dolares de EEUU";
      break;

      case "DOLAR-CA":
        this.calculo = this.numero1 * 1.48;
        this.mensaje= "Son " + this.calculo + " dolares de Canada ";
      break;

      case "PESO MEX":
        this.calculo = this.numero1 * 19.95;
        this.mensaje= "Son " + this.calculo + " pesos mejicanos";
      break;
    }

  }
}
