import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { BookatableComponent } from './bookatable/bookatable.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PizzamenuComponent } from './pizzamenu/pizzamenu.component';
import { SidesmenuComponent } from './sidesmenu/sidesmenu.component';
import { ContactComponent } from './contact/contact.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    BookatableComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    PizzamenuComponent,
    SidesmenuComponent,
    ContactComponent,
    UpdateprofileComponent,
    ForgotpasswordComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdbCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
