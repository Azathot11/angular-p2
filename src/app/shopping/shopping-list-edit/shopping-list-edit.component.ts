import { Component, ElementRef, ViewChild,Output,EventEmitter } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingService } from '../shopping.service';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {

 @ViewChild('nameInput',{static:false}) nameInputRef:ElementRef
 @ViewChild('amountInput',{static:false}) amountInputRef:ElementRef

// @Output() ingredientsAdded = new EventEmitter<{name:string,amount:number}>();

  constructor(private shoppingService:ShoppingService ) { }

 onAddItem(){
  const newIngredient = new Ingredients(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value);
  // this.ingredientsAdded.emit(newIngredient);
  this.shoppingService.onIngredientAdded(newIngredient)
 
 }

}
