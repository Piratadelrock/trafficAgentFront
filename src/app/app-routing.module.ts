import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './vista/contactos/contactos.component';
import { FormContactoComponent } from './vista/contactos/crearContacto/form-contacto.component';

const routes: Routes = [
    
  // redirigiendo a contactos no existe componente principal
    { path: '', redirectTo: '/contactos', pathMatch: 'full' },
    { path: 'contactos', component: ContactosComponent },
    { path: 'contactos/crear', component: FormContactoComponent },
    

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
