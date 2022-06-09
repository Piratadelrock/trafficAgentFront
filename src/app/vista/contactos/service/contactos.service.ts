import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Contacto, Respuesta } from 'src/app/models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  private urlEndPoint:string="http://localhost:8080/api/v1/emergencyContact";

  constructor(private http:HttpClient) { } 

  // obtener el listado de contactos
  getAllContacto(){
    return this.http.get<Respuesta>(this.urlEndPoint);
  }

  // crear un nuevo contacto
  createContacto(contacto: Contacto): Observable<any>{
    return this.http.post(this.urlEndPoint, contacto);
  }

  // // obtener un contacto 
  getContactoById(id: number): Observable<Contacto>{
    return this.http.get<Contacto>(this.urlEndPoint + "/" + id);
  }

  // // actualizar un contacto
  updateContacto(contacto: Contacto): Observable<Contacto>{
    return this.http.put<Contacto>(this.urlEndPoint, contacto);
  }

}
