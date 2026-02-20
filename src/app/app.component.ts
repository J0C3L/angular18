import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  tarea: string = '';
  lista: string[] = [];

  agregar() {
    if (this.tarea.trim() !== '') {
      this.lista.push(this.tarea);
      this.tarea = '';
    }
  }

}