import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanteArbeitComponent } from './ambulante-arbeit.component';

describe('AmbulanteArbeitComponent', () => {
  let component: AmbulanteArbeitComponent;
  let fixture: ComponentFixture<AmbulanteArbeitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmbulanteArbeitComponent]
    });
    fixture = TestBed.createComponent(AmbulanteArbeitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
