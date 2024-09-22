import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Planeta } from '../planetas/planeta';

@Component({
  selector: 'app-rocosos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rocosos.component.html',
  styleUrl: './rocosos.component.css'
})
export class RocososComponent {
  rocosos: Planeta[]=[
    {
      nombre: 'Mercurio',
      diametro: '4879 KM',
      distancia_sol: '57900000 KM',
      lunas: 0,
      tipo: 'Rocoso',
      url: "https://starwalk.space/gallery/images/facts-about-mercury/1140x641.jpg",
    }
]}
