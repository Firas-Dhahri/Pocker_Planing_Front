import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesprintComponent } from './updatesprint.component';

describe('UpdatesprintComponent', () => {
  let component: UpdatesprintComponent;
  let fixture: ComponentFixture<UpdatesprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesprintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatesprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
