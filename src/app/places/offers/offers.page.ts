import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: Place[] = [];
  constructor(private placesService: PlacesService, private router: Router) {}

  ngOnInit() {
    this.offers = this.placesService.places;
  }

  onDelete(offerId: string, slide: IonItemSliding) {
    console.log(`Offer with id ${offerId}`);
    slide.close();
  }

  onEdit(offerId: string, slide: IonItemSliding) {
    console.log(`Offer with id ${offerId}`);
    //this.router.navigateByUrl(`/places/tabs/offers/${offerId}`);
    this.router.navigate(['/', 'places', 'tabs', 'offers', offerId]);
    slide.close();
  }
}
