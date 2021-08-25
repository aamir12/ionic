import { Injectable } from '@angular/core';
import { Recipe } from './recipe.modal';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Burger',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__480.jpg',
      ingredients: ['Cheese', 'Meat', 'Bread'],
    },
    {
      id: 2,
      name: 'Sandwitch',
      image:
        'https://toppng.com/uploads/preview/sandwich-11528343614bv9x7plxbh.png',
      ingredients: ['Salad', 'Bread', 'Butter'],
    },
  ];
  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(id: number) {
    return this.recipes.find((x) => x.id === id);
  }

  deleteRecipe(id: number) {
    this.recipes = this.recipes.filter((x) => x.id !== id);
  }
}
