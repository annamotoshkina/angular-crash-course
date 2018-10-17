import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyInstructorFormComponent } from './udemy-instructor-form.component';

describe('UdemyInstructorFormComponent', () => {
  let component: UdemyInstructorFormComponent;
  let fixture: ComponentFixture<UdemyInstructorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdemyInstructorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyInstructorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
