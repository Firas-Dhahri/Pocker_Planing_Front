import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutersprintComponent } from './ajoutersprint.component';

describe('AjoutersprintComponent', () => {
  let component: AjoutersprintComponent;
  let fixture: ComponentFixture<AjoutersprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutersprintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutersprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
