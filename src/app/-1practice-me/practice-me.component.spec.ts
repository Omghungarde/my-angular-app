import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeMeComponent } from './practice-me.component';

describe('PracticeMeComponent', () => {
  let component: PracticeMeComponent;
  let fixture: ComponentFixture<PracticeMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
