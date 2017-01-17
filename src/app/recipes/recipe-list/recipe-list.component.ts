import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dummy', 'https://s-media-cache-ak0.pinimg.com/736x/3c/f9/28/3cf9288e26e5e53f0c9b987b9cab044d.jpg');

  constructor() { }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

  ngOnInit() {
  }

}
