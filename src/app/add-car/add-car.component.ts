import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  /* carName = ''; *//* (1) */
  carYear = 2017;
  @Output('onAddCar')  carEmitter= new EventEmitter<{name:string, year:number}>();
  @ViewChild('carYearInput', {static: false}) carYearInput: ElementRef /* (2) */
  constructor() { }

  ngOnInit() {
  }

  /* Реализация two way biding  без ngModel  */
  addCar(carNameEl: HTMLInputElement){

    /* (1) *//* this.onAddCar.emit({
      name: this.carName,
      year: this.carYear
    }) */
    this.carEmitter.emit({
      name: carNameEl.value,
      year: +this.carYearInput.nativeElement.value /* (2) */
    });

    carNameEl.value='';
    this.carYearInput.nativeElement.value = 2017; /* (2) */

  }

}
