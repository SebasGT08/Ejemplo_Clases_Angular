import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabezeraComponent } from './cabezera/cabezera.component';
import { MenuComponent } from './menu/menu.component';
import { PieComponent } from './pie/pie.component';

import { FormComponentComponent } from './form-component/form-component.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Form2Component } from './form2/form2.component';

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
     Form2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
