
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['../../app.component.css']
})
export class HeroeComponent {
  titulo: string = 'Contenedor App';
  nombre:string = 'Iroman';
  edad:number=45;

  get nombreCapitalizado(){
    return this.nombre.toUpperCase;
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }
 
}

