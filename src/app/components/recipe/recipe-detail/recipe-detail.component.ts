import { Component ,Input} from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingService } from 'src/app/shopping/shopping.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() detail:Recipe;

  constructor( private shoppingService:ShoppingService) { }

  onAddToShoppingList(ingredients:Ingredients[]){
    ingredients.forEach(ingredient => {
      this.shoppingService.onIngredientAdded(ingredient)
    });

  }

}
