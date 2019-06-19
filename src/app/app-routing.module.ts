import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TilesComponent } from './tiles/tiles.component';
import { AllrecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'  },
  { path: 'dashboard', component: TilesComponent },
  { path: 'recipes', component: AllrecipesComponent },
  { path: 'recipe/:slug', component: RecipeDetailsComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
