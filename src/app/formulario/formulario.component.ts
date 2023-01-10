import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Input() btnColor !: string;
  @Output() newItenEvent = new EventEmitter<string>();

  onEnviar(nombre: string,dni: string,civil: string){
    let objUser = {
      "nombre":nombre,
      "dni":dni,
      "estado_civil":civil
    }
    this.newItenEvent.emit(JSON.stringify(objUser));
  }
}
