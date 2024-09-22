import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  autor:any = {nombres:'Jhon Molina, Brayan Smith', apellidos:'programacion 3, grupo 2-corhuila'}
}
