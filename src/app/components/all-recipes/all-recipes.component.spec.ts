import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllrecipesComponent } from './all-recipes.component';

describe('AllrecipesComponent', () => {
  let component: AllrecipesComponent;
  let fixture: ComponentFixture<AllrecipesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllrecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllrecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
