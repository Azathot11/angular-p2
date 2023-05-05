import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../../../recipes/recipe.model';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Testing Recipe',
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-05/Tomato-Pie_0256.jpg?itok=c63mh-z9',
      [
        new Ingredients('Meat', 1),
        new Ingredients('French Fries', 20),
      ]
    ),
    new Recipe(
      'Test Recipe 2',
      'Testing Recipe',
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-05/Tomato-Pie_0256.jpg?itok=c63mh-z9',
      [
        new Ingredients('Buns', 2),
        new Ingredients('Meat', 1),
      ]
    ),
    new Recipe(
      'Test Recipe 3',
      'Testing Recipe',
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-05/Tomato-Pie_0256.jpg?itok=c63mh-z9',
      [
        new Ingredients('Buns', 2),
        new Ingredients('Meat', 1),
      ]
    ),
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}
