import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculoComponent } from './calculo/calculo.component';
import { FormsModule } from '@angular/forms';
import { CambioDeMonedaComponent } from './cambio-de-moneda/cambio-de-moneda.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculoComponent,
    CambioDeMonedaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
