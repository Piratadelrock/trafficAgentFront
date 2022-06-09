import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from 'src/app/models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  private urlEndPoint:string="http://localhost:8080/api/v1/emergencyContact";

  constructor(private http:HttpClient) { } 


  // obtener el listado de contactos
  getAllContacto(): Observable<Contacto[]>{
    return this.http.get<Contacto[]>(this.urlEndPoint);   

  }

  // getAllContacto(): Observable<any>{
  //   return this.http.get(this.urlEndPoint);   
  // }


  // crear un nuevo contacto
  createContacto(contacto: Contacto): Observable<Contacto>{
    return this.http.post<Contacto>(this.urlEndPoint, contacto);
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
