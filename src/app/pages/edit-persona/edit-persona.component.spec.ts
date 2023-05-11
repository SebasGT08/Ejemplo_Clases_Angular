import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonaComponent } from './edit-persona.component';

describe('EditPersonaComponent', () => {
  let component: EditPersonaComponent;
  let fixture: ComponentFixture<EditPersonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPersonaComponent]
    });
    fixture = TestBed.createComponent(EditPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
