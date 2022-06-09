import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/models/contacto';
import { ContactosService } from '../service/contactos.service';

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})
export class FormContactoComponent implements OnInit {

  contacto: Contacto = new Contacto();
  titulo:string = "Registar Contacto";


  constructor(private contactoService:ContactosService, private router:Router) { }

  ngOnInit(): void {
  }

  createContacto(): void {
    console.log(this.contacto);
    this.contactoService.createContacto(this.contacto).subscribe(
      res => { 
        this.router.navigate(['/contactos']);
      }
    );
  }


}
