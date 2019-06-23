import { Component, OnInit } from '@angular/core';
import { recipes } from '../data/recipes/data.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  private allRecipes = recipes;
  private recipe;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipe = this.allRecipes.find( recipe => recipe.id === id)
  }

}
