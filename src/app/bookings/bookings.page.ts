import { Component, OnInit } from '@angular/core';
import { IonItemSliding, MenuController } from '@ionic/angular';
import { Booking } from './booking.model';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBookings: Booking[];
  constructor(private bookingsService: BookingService) {}

  ngOnInit() {
    this.loadedBookings = this.bookingsService.bookings;
  }

  onCancelBooking(bookingId: string, slideBooking: IonItemSliding) {
    console.log(bookingId);
    slideBooking.close();
  }
}
