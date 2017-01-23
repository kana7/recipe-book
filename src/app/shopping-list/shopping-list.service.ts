import { Ingredient } from '../shared/ingredient';

export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }

  getItems(){
    return this.items;
  }

  addItems(items : Ingredient[]){
    Array.prototype.push.apply(this.items, items); //use the array push to push multiple items to the list of items
  }

}
