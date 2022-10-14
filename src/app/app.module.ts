import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PortadaComponent } from './portada/portada.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { NieblaComponent } from './niebla/niebla.component';
import { LoginComponent } from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';
import {HttpClientModule} from '@angular/common/http';
import { PortfolioComponent } from './portfolio/portfolio.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { interceptorProvider } from './servicios/interceptor-service';
import { NuevaExperienciaComponent } from './experiencia/nueva-experiencia.component';
import { EditarExperieciaComponent } from './experiencia/editar-experiecia.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortadaComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    NieblaComponent,
    LoginComponent,
    ContactoComponent,
    PortfolioComponent,
    RegistroComponent,
    NuevaExperienciaComponent,
    EditarExperieciaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule
   
    
    
  ],
  providers: [

    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
