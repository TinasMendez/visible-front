import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSugComponent } from './profile-sug.component';

describe('ProfileSugComponent', () => {
  let component: ProfileSugComponent;
  let fixture: ComponentFixture<ProfileSugComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileSugComponent]
    });
    fixture = TestBed.createComponent(ProfileSugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
