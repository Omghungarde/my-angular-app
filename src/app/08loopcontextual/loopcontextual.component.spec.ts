import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopcontextualComponent } from './loopcontextual.component';

describe('LoopcontextualComponent', () => {
  let component: LoopcontextualComponent;
  let fixture: ComponentFixture<LoopcontextualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoopcontextualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoopcontextualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
