import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  loadedRecipe: Recipe = null;
  ngOnInit() {
    this.route.paramMap.subscribe((param) => {
      if (!param.has('recipeId')) {
        return;
      }
      const recipeId = +param.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);
    });
  }
}
