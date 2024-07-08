import { Component, OnInit } from '@angular/core';
import { Bookings, Car } from '../../models/car';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css',
})
export class BookingsComponent implements OnInit {
  isSidePanelVisible: boolean = false;

  carList: Car[] = [];

  bookingObj: Bookings = new Bookings();

  localKeyName: string = 'rentalCars';

  localBookingKey: string = 'rentalBooking';

  bookingList: Bookings[] = [];

  ngOnInit(): void {
    const localData = localStorage.getItem(this.localKeyName);
    if (localData != null) {
      this.carList = JSON.parse(localData);
    }
    const localBookingData = localStorage.getItem(this.localBookingKey);
    if (localBookingData != null) {
      this.bookingList = JSON.parse(localBookingData);
    }
  }

  onSave() {
    if (this.bookingObj.bookingId == 0) {
      const carData = this.carList.find(m => m.carId == this.bookingObj.cardId);
     if(carData!=undefined){
       this.bookingObj.carName = carData.carName;
     }
      this.bookingList.unshift(this.bookingObj);
      localStorage.setItem(this.localBookingKey,JSON.stringify(this.bookingList));
    }
  }

  onReset() {
    this.bookingObj = new Bookings();
  }
}
