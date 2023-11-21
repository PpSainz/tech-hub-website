import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
//paginas
import { LoginComponent } from '../pages/auth/login/login.component';
import { RecoverComponent } from '../pages/auth/recover/recover.component';
import { RegisterComponent } from '../pages/auth/register/register.component';
import { HomeComponent } from '../pages/home/home.component';

import { AssemblerComponent } from '../pages/assembler/assembler.component';
import { NoobComponent } from '../pages/assembler/noob/noob.component';
import { ProComponent } from '../pages/assembler/pro/pro.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        LoginComponent,
        RecoverComponent,
        RegisterComponent,
        HomeComponent,
        AssemblerComponent,
        NoobComponent,
        ProComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CommonModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
