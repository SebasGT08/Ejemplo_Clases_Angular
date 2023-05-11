import { PersonaService } from './../../services/persona.service';
import { Persona } from './../../domain/persona';
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list-persona',
  templateUrl: './list-persona.component.html',
  styleUrls: ['./list-persona.component.scss']
})
export class ListPersonaComponent {
  listadoPersonas: Persona[] = []

  constructor(private personaService: PersonaService,
    private router: Router) {
    this.listadoPersonas = personaService.getlist()
    console.log('listadoPersonas', this.listadoPersonas)
  }

  editar(persona: Persona){
    let params: NavigationExtras = {
      queryParams: {
        cedula: persona.cedula
      }
    }
    this.router.navigate(['edit-persona'], params)
  }

  eliminar(persona: Persona) {
    this.personaService.delete(persona.cedula);
    this.listadoPersonas = this.personaService.getlist();
  }
}
