import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherSprintsComponent } from './afficher-sprints.component';

describe('AfficherSprintsComponent', () => {
  let component: AfficherSprintsComponent;
  let fixture: ComponentFixture<AfficherSprintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherSprintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherSprintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
