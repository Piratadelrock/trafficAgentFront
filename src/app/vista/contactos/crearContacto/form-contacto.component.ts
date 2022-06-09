import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto, Respuesta } from 'src/app/models/contacto';
import { ContactosService } from '../service/contactos.service';

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})
export class FormContactoComponent implements OnInit {

  // contacto nuevo
  contacto: Contacto = new Contacto();
  titulo:string = "Registar Contacto";


  constructor(private contactoService:ContactosService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.mostrarContacto();
  }

  mostrarContacto(): void {
    this.activatedRoute.params.subscribe(
      e=>{
        let id = e['id'];
        if(id){
          this.contactoService.getContactoById(id).subscribe(
            (res:Respuesta)=>{
              this.contacto = res.data[0];
            }
          );
        }
      }
    );
    
  }

  // updateContacto(){
  //   this.contactoService.updateContacto(this.contacto).subscribe(
  //     res => { 
  //       this.router.navigate(['/contactos']);
  //     }
  //   );
  // }

   createContacto(): void {
    console.log(this.contacto);
    this.contactoService.createContacto(this.contacto).subscribe(
      res => { 
        this.router.navigate(['/contactos']);
      }
    );
  }


}
