import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
import { UpdatemenuComponent } from './updatemenu/updatemenu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { AddmenuComponent } from './addmenu/addmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReservationComponent,
    UpdatemenuComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    AddmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
