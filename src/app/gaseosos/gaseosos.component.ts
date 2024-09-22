import { Component } from '@angular/core';
import { Planeta } from '../planetas/planeta';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gaseosos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gaseosos.component.html',
  styleUrl: './gaseosos.component.css'
})
export class GaseososComponent {
  gaseosos: Planeta[]=[
    {
      nombre: 'Jupiter',
      diametro: '139820 KM',
      distancia_sol: '778500000 KM',
      lunas: 79,
      tipo: 'Gaseoso',
      url: "https://www.ngenespanol.com/wp-content/uploads/2024/02/jupiter-podria-haber-sido-plano-alguna-vez-sugiere-nueva-teoria-1024x573.jpg",
    }
]}

