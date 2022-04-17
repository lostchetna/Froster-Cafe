import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookatableComponent } from './bookatable/bookatable.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PizzamenuComponent } from './pizzamenu/pizzamenu.component';
import { RegisterComponent } from './register/register.component';
import { SidesmenuComponent } from './sidesmenu/sidesmenu.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'gallery',component:GalleryComponent
  },
  {
    path: 'about',component:AboutComponent
  },
  {
    path: 'bookatable',component:BookatableComponent
  },
  {
    path: 'menu',component:MenuComponent
  },
  {
    path:'header',component:HeaderComponent
  },
  {
    path:'pizzamenu',component:PizzamenuComponent
  },
  {
    path:'sidesmenu',component:SidesmenuComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'updateprofile',component:UpdateprofileComponent
  },
  {
    path:'forgotpassword',component:ForgotpasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
