import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilingComponent } from './profiling.component';

describe('ProfilingComponent', () => {
  let component: ProfilingComponent;
  let fixture: ComponentFixture<ProfilingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilingComponent]
    });
    fixture = TestBed.createComponent(ProfilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
