import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit, OnDestroy {
  constructor(
    private placesService: PlacesService,
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) {}

  place: Place;
  routeSub: Subscription;
  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe((param) => {
      if (!param.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }

      this.place = this.placesService.getPlace(param.get('placeId'));
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
