import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormPersonaComponent } from './pages/form-persona/form-persona.component';
import { ListPersonaComponent} from './pages/list-persona/list-persona.component'

import { EditPersonaComponent} from './pages/edit-persona/edit-persona.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'form-persona', component: FormPersonaComponent },
  { path: 'list-persona', component: ListPersonaComponent },
  { path: 'edit-persona', component: EditPersonaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
