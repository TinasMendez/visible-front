import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubThemesComponent } from './sub-themes.component';

describe('SubThemesComponent', () => {
  let component: SubThemesComponent;
  let fixture: ComponentFixture<SubThemesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubThemesComponent]
    });
    fixture = TestBed.createComponent(SubThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
