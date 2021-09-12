import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ModalController,
  NavController,
  ActionSheetController,
} from '@ionic/angular';

import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private placesService: PlacesService,
    private actionSheetCtrl: ActionSheetController
  ) {}

  place: Place;
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }

      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

  // onBookPlace() {
  //   //this.router.navigateByUrl('/places/tabs/discover');
  //   //this.router.navigate(['/', 'places', 'tabs', 'discover']);
  //   //this.navCtrl.navigateBack('/places/tabs/discover'); //give animation effect
  //   //this.navCtrl.pop(); // it will not work when page is refresh

  //   //In case mulitple modal give modal id at the time of open
  //   this.modalCtrl
  //     .create({
  //       component: CreateBookingComponent,
  //       componentProps: {
  //         selectedPlace: this.place,
  //       },
  //       //id:'modal-ID'
  //     })
  //     .then((modalEl) => {
  //       modalEl.present();
  //       return modalEl.onDidDismiss();
  //     })
  //     .then((resultData) => {
  //       console.log(resultData.data, resultData.role);
  //       if (resultData.role === 'confirm') {
  //         console.log('BOOKED!');
  //       }
  //     });
  // }

  async onBookPlace() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Choose an Action',
      buttons: [
        {
          text: 'Select Date',
          role: 'select',
          handler: () => {
            this.openBookingModal('select');
          },
        },
        {
          text: 'Random Date',
          role: 'random',
          handler: () => {
            this.openBookingModal('random');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });

    await actionSheet.present();
    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async openBookingModal(mode: 'select' | 'random') {
    console.log('modal' + mode);
    let modalCtrl = await this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: {
        selectedPlace: this.place,
      },
      //id:'modal-ID'
    });

    await modalCtrl.present();
    const { role, data } = await modalCtrl.onDidDismiss();
    console.log(`${role}`);
    console.log(JSON.stringify(data));
  }
}
