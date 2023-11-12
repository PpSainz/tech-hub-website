import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
//paginas
import { LoginComponent } from '../pages/auth/login/login.component';
import { RecoverComponent } from '../pages/auth/recover/recover.component';
import { RegisterComponent } from '../pages/auth/register/register.component';
import { HomeComponent } from '../pages/home/home.component';
import { AssemblerComponent } from '../pages/assembler/assembler.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RecoverComponent,
    RegisterComponent,
    HomeComponent,
    AssemblerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
