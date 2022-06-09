export class Contacto {
    id: number = 0;
    number: string = '';
    name: string = "";
    relationship: string = "";
    userid: number = 0;
}

export interface Respuesta{
    data: Contacto[];
    messages:string[];
}