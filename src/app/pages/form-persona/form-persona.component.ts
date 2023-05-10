import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../../domain/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.scss']
})
export class FormPersonaComponent {
  persona: Persona = new Persona();

  constructor(private personaService: PersonaService,
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.persona = new Persona()
        this.persona = params['persona']
      }
    }

  guardar() {
    console.log(this.persona)
    this.personaService.save(this.persona)
    this.persona = new Persona()
  }
}
