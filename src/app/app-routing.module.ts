import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {
    path: 'home',
    component: NavbarComponent
  },
  {
    path: 'time',
    component: NavbarComponent
  },
  {
    path: 'pomo',
    component: NavbarComponent
  },
  {
    path: 'memo',
    component: NavbarComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
