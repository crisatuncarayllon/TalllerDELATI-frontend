import { Routes } from '@angular/router';

import { KmeansComponent } from '../kmeans/kmeans.component';
import { HomeComponent } from '../home/home.component';
import { MetododelCodoComponent } from '../metododel-codo/metododel-codo.component';
import { ClasificacionComponent } from '../clasificacion/clasificacion.component';


//Components

export const PANEL_ROUTES: Routes = [
  { path: "inicio", component: HomeComponent},
  { path: "kmeans", component: KmeansComponent},
  { path: "MetododelCodo", component: MetododelCodoComponent}, 
  { path: "Clasificacion", component: ClasificacionComponent}, 
  { path: "**", pathMatch: 'full', redirectTo: "inicio" },
  // { path: "kmeans", component: KmeansComponent},

];
