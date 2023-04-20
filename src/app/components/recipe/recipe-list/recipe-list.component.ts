import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Testing Recipe',
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-05/Tomato-Pie_0256.jpg?itok=c63mh-z9'
    ),
    new Recipe(
      'Test Recipe 2',
      'Testing Recipe',
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-05/Tomato-Pie_0256.jpg?itok=c63mh-z9'
    ),
    new Recipe(
      'Test Recipe 3',
      'Testing Recipe',
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-05/Tomato-Pie_0256.jpg?itok=c63mh-z9'
    ),
  ];

  @Output() recipeDetail =new EventEmitter<object>(); 

  recipeWasSelected(selectedRecipe:Recipe)
  {
    
     this.recipeDetail.emit(selectedRecipe);
  }

  constructor() {}

  ngOnInit() {}
}
