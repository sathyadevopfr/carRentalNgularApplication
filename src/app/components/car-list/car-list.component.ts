import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css',
})
export class CarListComponent implements OnInit {
  carObj: Car = new Car();
  carList: Car[] = [];
  localKeyName: string = 'rentalCars';
  isSidePanelVisible: boolean = false;
  ngOnInit() {
    debugger;
    const localStore = localStorage.getItem(this.localKeyName);
    if (localStore != null) {
      this.carList = JSON.parse(localStore);
    }
  }

  onSavecar() {
      debugger;
    if (this.carObj.carId == 0) {
      this.carObj.carId = this.carList.length + 1;
      this.carList.unshift(this.carObj);
      localStorage.setItem(this.localKeyName,JSON.stringify(this.carList));
    }
  }

  onResetCar() {
    this.carObj = new Car();
  }
}
