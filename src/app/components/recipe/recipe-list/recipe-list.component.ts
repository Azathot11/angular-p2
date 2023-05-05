import { Component} from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] 

  // @Output() recipeDetail =new EventEmitter<Recipe>(); 

  
  constructor(private RecipeService:RecipeService) {}

  
  recipeWasSelected(selectedRecipe:Recipe)
  {
    this.RecipeService.recipeSelected.emit(selectedRecipe);
    //  this.recipeDetail.emit(selectedRecipe);
  }

  ngOnInit() {
    this.recipes = this.RecipeService.getRecipes();
  }
}
