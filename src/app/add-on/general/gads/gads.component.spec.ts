import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadsComponent } from './gads.component';

describe('GadsComponent', () => {
  let component: GadsComponent;
  let fixture: ComponentFixture<GadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
