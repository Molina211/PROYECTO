import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  autor1:any = {nombres:'Jhon Sebatian', apellidos:'Molina Fierro'}
  autor2:any = {nombres:'Brayan Smith', apellidos:'Bedoya Montealegre'}
  autor3:any = {nombres:'Programacion 3 Grupo 2 - Corhuila'}
}
