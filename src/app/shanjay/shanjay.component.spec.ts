import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShanjayComponent } from './shanjay.component';

describe('ShanjayComponent', () => {
  let component: ShanjayComponent;
  let fixture: ComponentFixture<ShanjayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShanjayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShanjayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
