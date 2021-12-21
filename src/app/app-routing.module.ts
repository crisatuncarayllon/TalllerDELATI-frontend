import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//CHILDREN


import { PANEL_ROUTES } from './components/panel/panel.routes';
import { PanelComponent } from './components/panel/panel.component';


const routes: Routes = [

  {
    path: "panel", component: PanelComponent,
    children: PANEL_ROUTES
  },
  { path: "**", pathMatch: 'full', redirectTo: "panel" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
