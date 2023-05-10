import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabezeraComponent } from './cabezera/cabezera.component';
import { MenuComponent } from './menu/menu.component';
import { PieComponent } from './pie/pie.component';

import { FormComponentComponent } from './form-component/form-component.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormPersonaComponent } from './pages/form-persona/form-persona.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabezeraComponent,
    MenuComponent,
    PieComponent,

    FormComponentComponent,
     ContenidoComponent,
     HomeComponent,
     AboutComponent,
     ContactComponent,
     FormPersonaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
