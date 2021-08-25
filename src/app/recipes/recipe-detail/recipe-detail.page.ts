import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
    private route: ActivatedRoute,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  loadedRecipe: Recipe = null;
  ngOnInit() {
    this.route.paramMap.subscribe((param) => {
      if (!param.has('recipeId')) {
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = +param.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);
    });
  }

  async deleteRecipe() {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Once you delete it will not be revert back',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Yes',
          handler: () => {
            this.recipeService.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['/recipes']);
          },
        },
      ],
    });

    await alert.present();
  }
}
