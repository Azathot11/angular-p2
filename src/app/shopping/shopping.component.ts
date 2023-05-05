import { Component,Input } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingService } from './shopping.service';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  providers:[ShoppingService]
})
export class ShoppingComponent {

  ingredients: Ingredients[] =[];

  constructor(private shoppingService:ShoppingService) { }

  // onIngredientAdded(ingredient:Ingredients){
  //   console.log(ingredient,'')
  //   this.ingredients.push(ingredient);
  // }


  ngOnInit(){
    this.ingredients=this.shoppingService.getIngredients();
    this.shoppingService.ingredientAdded.subscribe((ingredients:Ingredients[])=>{
      this.ingredients=ingredients;
    })
 }


}
