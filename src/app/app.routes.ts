import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';
import { PlanetasComponent } from './planetas/planetas.component';
import { RocososComponent } from './rocosos/rocosos.component';
import { GaseososComponent } from './gaseosos/gaseosos.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {path:'header', component:HeaderComponent},
    {path:'footer', component:FooterComponent},
    {path:'planetas', component:PlanetasComponent},
    {path:'rocosos', component:RocososComponent},
    {path:'gaseosos', component:GaseososComponent}
];
