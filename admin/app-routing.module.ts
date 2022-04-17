import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
import { UpdatemenuComponent } from './updatemenu/updatemenu.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path:'login',component: LoginComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'reservation',component:ReservationComponent
  },
  {
    path:'updatemenu',component:UpdatemenuComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'header',component:HeaderComponent
  },
  {
    path:'addmenu',component:AddmenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
