export class Car {
  carId: number;
  carName: string;
  carImage: string;
  ratePerHour: number;
  ratePerDay: number;
  constructor() {
    (this.carId = 0), (this.carImage = '');
    this.carName = '';
    this.ratePerDay = 0;
    this.ratePerHour = 0;
  }
}

export class Bookings {
  customerName: string;
  bookingId: number;
  mobileNum: number;
    cardId: number;
    bookingDate: Date;
    carName: string;
    rentType: string;
    rentDuration: string;
    noOfCars: number;
    constructor() {
      this.bookingDate = new Date();
      this.bookingId = 0;
        this.customerName = '';
        this.carName = '';
        this.cardId = 0;
        this.mobileNum = 0;
        this.rentType=''
        this.rentDuration = '';
        this.noOfCars = 0;
    }
}
