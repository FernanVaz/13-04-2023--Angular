import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  correo:string="";
  direccion:string="";
  telefono:string="";
  comunidad:string="";
  pago:string="";
  check:string="";


enviar():void{
  this.correo;
  this.direccion;
  this.telefono;
  this.comunidad;
  this.pago;
  this.check = this.check?"aceptado":"no aceptado";
}
}
