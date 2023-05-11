import { Component, OnInit } from '@angular/core';
import { Persona } from './../../domain/persona';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from './../../services/persona.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.scss']
})
export class EditPersonaComponent{

  persona: Persona = new Persona();

  constructor(private route: ActivatedRoute, private router: Router, private personaService: PersonaService) {
    this.route.queryParams.subscribe(params => {
      const cedula = params['cedula'];
      const personaRecuperada = this.personaService.getPersonaByCedula(cedula);

      // Solo actualizamos si el objeto no es nulo ni indefinido
      if (personaRecuperada) {
        this.persona = personaRecuperada;
      }
    });
  }
  guardar() {
    this.personaService.update(this.persona.cedula, this.persona);
    this.router.navigate(['list-persona']);
  }

}
