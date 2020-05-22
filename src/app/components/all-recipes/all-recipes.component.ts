import { Component, OnInit } from '@angular/core';
import { recipes } from '../../data/recipes/data.json';


@Component({
  selector: 'app-allrecipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllrecipesComponent implements OnInit {

  private allRecipes = recipes;

  constructor() { }

  ngOnInit() {
  }

}
