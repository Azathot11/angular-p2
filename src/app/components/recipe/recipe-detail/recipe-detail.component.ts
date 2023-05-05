import { Component ,Input} from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { ShoppingComponent } from 'src/app/shopping/shopping.component';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() detail:Recipe;

  constructor( shoppingService:ShoppingComponent) { }

  onAddToShoppingList(recipe:Recipe){
    console.log(recipe,'recipe');
    // this.shoppingService.onIngredientAdded(recipe.ingredients);

  }

}
