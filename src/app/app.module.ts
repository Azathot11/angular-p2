import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/recipe/recipe-detail/recipe-detail.component';

import { ShoppingListEditComponent } from './shopping/shopping-list-edit/shopping-list-edit.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppModuleRouting } from './app-routing-module';
import { StartComponent } from './components/recipe/start/start.component'

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListEditComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingComponent,
    DropdownDirective,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppModuleRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
