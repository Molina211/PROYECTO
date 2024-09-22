import { Component, OnInit } from '@angular/core';
import { Planeta } from './planeta';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planetas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planetas.component.html',
  styleUrl: './planetas.component.css'
})
export class PlanetasComponent implements OnInit{
  planetas: Planeta[]=[
    {
      nombre: 'Mercurio',
      diametro: '4879 KM',
      distancia_sol: '57900000 KM',
      lunas: 0,
      tipo: 'Rocoso',
      url: "https://starwalk.space/gallery/images/facts-about-mercury/1140x641.jpg",
    },
    {
      nombre: 'Jupiter',
      diametro: '139820 KM',
      distancia_sol: '778500000 KM',
      lunas: 79,
      tipo: 'Gaseoso',
      url: "https://www.ngenespanol.com/wp-content/uploads/2024/02/jupiter-podria-haber-sido-plano-alguna-vez-sugiere-nueva-teoria-1024x573.jpg",
    }
]

ngOnInit(): void {
    
}}

