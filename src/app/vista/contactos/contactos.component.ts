import { Component, OnInit } from '@angular/core';
import { Contacto, Respuesta } from 'src/app/models/contacto';
import { ContactosService } from './service/contactos.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  titulo:string = "Lista de Contactos de emergencia!";

  contactos:Contacto[] = [];

  constructor(private contactoService:ContactosService ) { }  

  ngOnInit(): void {
    

  }

  public getAllContactoService(): void {
    this.contactoService.getAllContacto().subscribe(
      (contacto) => { 
        this.contactos = contacto;
      }
    );
  }

  // 
  objectKeys (objeto: any) {
    const keys = Object.keys(objeto); 
    console.log(keys);
    return keys;
 }

}
