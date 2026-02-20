import { Component } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  tarea: string = '';
  lista: string[] = [];

  agregar() {
    if (this.tarea.trim() !== '') {
      this.lista.push(this.tarea);
      this.tarea = '';
    }
  }

}