import { Routes } from '@angular/router';

import { KmeansComponent } from '../kmeans/kmeans.component';
import { HomeComponent } from '../home/home.component';

//Components

export const PANEL_ROUTES: Routes = [
  { path: "inicio", component: HomeComponent},
  { path: "kmeans", component: KmeansComponent},
  { path: "**", pathMatch: 'full', redirectTo: "inicio" },
  // { path: "kmeans", component: KmeansComponent},

];
