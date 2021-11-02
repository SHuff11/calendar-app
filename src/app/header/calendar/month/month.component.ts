import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  @Input() name:string; 
  @Input() days:number;
  buttonStatus = false;


  constructor() {}

  ngOnInit(): void {
  }

  getbuttonCrap() {
    this.buttonStatus = !this.buttonStatus
  }
  
}
