import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationaereArbeitComponent } from './stationaere-arbeit.component';

describe('StationaereArbeitComponent', () => {
  let component: StationaereArbeitComponent;
  let fixture: ComponentFixture<StationaereArbeitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StationaereArbeitComponent]
    });
    fixture = TestBed.createComponent(StationaereArbeitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
