import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  onBookPlace() {
    //this.router.navigateByUrl('/places/tabs/discover');
    //this.router.navigate(['/', 'places', 'tabs', 'discover']);
    //this.navCtrl.navigateBack('/places/tabs/discover'); //give animation effect
    //this.navCtrl.pop(); // it will not work when page is refresh
    this.modalCtrl
      .create({ component: CreateBookingComponent })
      .then((modal) => {
        modal.present();
      });
  }
}
