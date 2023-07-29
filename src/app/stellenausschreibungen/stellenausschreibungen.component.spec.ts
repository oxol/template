import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellenausschreibungenComponent } from './stellenausschreibungen.component';

describe('StellenausschreibungenComponent', () => {
  let component: StellenausschreibungenComponent;
  let fixture: ComponentFixture<StellenausschreibungenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StellenausschreibungenComponent]
    });
    fixture = TestBed.createComponent(StellenausschreibungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
