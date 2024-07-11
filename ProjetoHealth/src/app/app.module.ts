import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { HelpComponent } from './components/home/corpo/help/help.component';
import { BeneficiosComponent } from './components/home/corpo/beneficios/beneficios.component';
import { ServicosComponent } from './components/home/corpo/servicos/servicos.component';
import { SobreComponent } from './components/home/corpo/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HelpComponent,
    BeneficiosComponent,
    ServicosComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
