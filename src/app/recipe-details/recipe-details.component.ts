import { Component, OnInit } from '@angular/core';
import { recipes } from '../data/recipes/data.json';
import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  private allRecipes = recipes;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const recipe = this.allRecipes.find( recipe => recipe.id === id)
   /* function isCherries(fruit) {
      return fruit.id === id;
    }
    console.log(this.allRecipes.find(isCherries));
*/
    console.log(recipe);
  }

}
