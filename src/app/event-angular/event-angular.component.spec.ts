import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAngularComponent } from './event-angular.component';

describe('EventAngularComponent', () => {
  let component: EventAngularComponent;
  let fixture: ComponentFixture<EventAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
