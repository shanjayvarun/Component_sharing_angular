import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarunComponent } from './varun.component';

describe('VarunComponent', () => {
  let component: VarunComponent;
  let fixture: ComponentFixture<VarunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
