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

  public contactos:Contacto[] = [];

  constructor(private contactoService:ContactosService ) { }  

  ngOnInit(): void {
    this.getAllContactoService();
  }

  public getAllContactoService() {
    this.contactoService.getAllContacto().subscribe(
      (res:Respuesta) => {
        this.contactos=res.data;
      }
    );
  }

  deleteContacto(contacto:Contacto): void {
    this.contactoService.deleteContacto(contacto.id).subscribe(
      res => this.contactoService.getAllContacto().subscribe(
          Response => this.contactos = Response.data
        )
    );
  }




  // para ver los objetos en consola
  objectKeys (objeto: any) {
    const keys = Object.keys(objeto); 
    console.log(keys);
    return keys;
 }

}
