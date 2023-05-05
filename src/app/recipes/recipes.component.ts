import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../components/recipe/recipe-list/recipe.service';
import { ShoppingComponent } from '../shopping/shopping.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService,ShoppingComponent]
})
export class RecipesComponent {

  finalRecipeDetail:Recipe
  
  constructor(private RecipeService:RecipeService) {}
  
  // @Output() finalRecipeDetail:Recipe = this.RecipeService.recipeDetail; 
  // recipeWasSelected()
  // {
  // //  console.log(selectedRecipe)
  //    this.finalRecipeDetail=RecipeService.;
  // }
  
  ngOnInit(){
    this.RecipeService.recipeSelected.subscribe(
      (recipe:Recipe)=>{
        this.finalRecipeDetail=recipe;
      }
    );
  }
}
