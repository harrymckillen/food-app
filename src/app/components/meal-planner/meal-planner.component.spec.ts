import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MealPlannerComponent } from './meal-planner.component';

describe('MealPlannerComponent', () => {
  let component: MealPlannerComponent;
  let fixture: ComponentFixture<MealPlannerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MealPlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
