import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  @Input() selectedRecipe: Recipe;
  private recipeIndex : number;
  private subscription : Subscription;

  constructor(
  private sls: ShoppingListService,
  private route : ActivatedRoute,
  private recipeService : RecipeService,
  private router : Router
  ){}

  ngOnInit(){
    this.subscription = this.route.params.subscribe(
      (params : any)=>{
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipeService.getRecipeByid(this.recipeIndex);
      }
    );
  }

  onEdit(){
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }
  onDelete(){
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

}
