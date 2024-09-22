import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { RocososComponent } from './rocosos/rocosos.component';
import { GaseososComponent } from './gaseosos/gaseosos.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, PlanetasComponent, RocososComponent, GaseososComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Trabajo';
}
