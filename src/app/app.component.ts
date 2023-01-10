import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de personas';
  User:string =""
  onSuccess(elemento:any){
    this.User = elemento;
  }
}
