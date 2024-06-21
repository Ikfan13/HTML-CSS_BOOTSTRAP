import { Component } from '@angular/core';

@Component({
  selector: 'app-vehiclelist',
  templateUrl: './vehiclelist.component.html',
  styleUrl: './vehiclelist.component.css'
})
export class VehiclelistComponent {
  displayCars: boolean = true;
  selectedVehicle: string = '';

  cars: string[] = ["BMW", "Ford", "Mercedes", "Porsche", "Lamborghini", "Rolls Royce"];
  bikes: string[] = ["Yamaha", "Honda", "Ducati", "Kawasaki", "Harley-Davidson", "Royal Enfield"];

  toggleDisplay(showCars: boolean): void {
    this.displayCars = showCars;
    this.selectedVehicle = '';  
  }

  selectVehicle(vehicle: string): void {
    this.selectedVehicle = vehicle;
  }
}


