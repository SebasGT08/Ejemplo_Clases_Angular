import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabezeraComponent } from './cabezera.component';

describe('CabezeraComponent', () => {
  let component: CabezeraComponent;
  let fixture: ComponentFixture<CabezeraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabezeraComponent]
    });
    fixture = TestBed.createComponent(CabezeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
