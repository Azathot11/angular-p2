import { Component ,Input} from '@angular/core';
import { ActivatedRoute, Router ,Params} from '@angular/router';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingService } from 'src/app/shopping/shopping.service';
import { RecipeService } from '../recipe-list/recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
detail:Recipe;

  constructor( private shoppingService:ShoppingService,private recipeService:RecipeService,private route:ActivatedRoute, private router:Router) { }
 
  ngOnInit(){
  // this.detail = this.recipeService.recipeDetail(+this.route.snapshot.params['id'])
  this.route.params.subscribe((params:Params)=>{
    this.detail = this.recipeService.recipeDetail(+params['id'])
  })

 }

  onAddToShoppingList(ingredients:Ingredients[]){
    ingredients.forEach(ingredient => {
      this.shoppingService.onIngredientAdded(ingredient)
    });

  }

 

}
