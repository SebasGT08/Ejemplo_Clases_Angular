import { Component } from '@angular/core';
import { persona } from '../domain/persona';
import { PersonaService } from 'src/app/services/persona.service';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component {
  persona: persona = new persona();

  constructor(private personaService: PersonaService){}

  guardar(){
    console.log(this.persona)
    this.personaService.save(this.persona)
    //this.contacto = new contacto()
  }
}
