import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  async onLogin() {
    this.authService.onLogin();
    const loadCtrl = await this.loadingCtrl.create({
      keyboardClose: true,
      message: 'Logging in...',
    });
    await loadCtrl.present();
    setTimeout(() => {
      loadCtrl.dismiss();
      this.router.navigateByUrl('/places/tabs/discover');
    }, 1500);
  }
}
