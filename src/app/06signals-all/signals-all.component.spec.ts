import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsAllComponent } from './signals-all.component';

describe('SignalsAllComponent', () => {
  let component: SignalsAllComponent;
  let fixture: ComponentFixture<SignalsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
