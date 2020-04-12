import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TilesComponent } from './tiles/tiles.component';
import { AllrecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { MealPlannerComponent } from './meal-planner/meal-planner.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';

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
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
