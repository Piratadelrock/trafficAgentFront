import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactosComponent } from './vista/contactos/contactos.component';

import { HttpClientModule } from '@angular/common/http';
import { FormContactoComponent } from './vista/contactos/crearContacto/form-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    FormContactoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
