import { Component,Input } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {
  @Input() ingredients: Ingredients[] =[
    new Ingredients('Apples',5),
    new Ingredients('Tomatoes',10),
  ];

  onIngredientAdded(ingredient:Ingredients){
    console.log(ingredient,'')
    this.ingredients.push(ingredient);
  }

 

}
