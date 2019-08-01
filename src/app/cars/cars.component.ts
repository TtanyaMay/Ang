import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent  {

addCarStatus = '';
inputText = '1dd';

  constructor(){
    }

  addCar(){
    this.addCarStatus = 'The car is added';
  }
  onKeyUp(event){

    this.inputText = event.target.value;
  }
}
