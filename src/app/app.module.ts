import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { TilesComponent } from './components/tiles/tiles.component';
import { AllrecipesComponent } from './components/all-recipes/all-recipes.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { MealPlannerComponent } from './components/meal-planner/meal-planner.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TilesComponent,
    AllrecipesComponent,
    RecipeDetailsComponent,
    MealPlannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
