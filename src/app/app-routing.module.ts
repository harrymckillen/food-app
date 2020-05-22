import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TilesComponent } from './components/tiles/tiles.component';
import { AllrecipesComponent } from './components/all-recipes/all-recipes.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { MealPlannerComponent } from './components/meal-planner/meal-planner.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'  },
  { path: 'dashboard', component: TilesComponent },
  { path: 'planner', component: MealPlannerComponent },
  { path: 'recipes', component: AllrecipesComponent },
  { path: 'recipe/:id', component: RecipeDetailsComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
