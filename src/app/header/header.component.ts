import { Component, OnInit } from '@angular/core';
// import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // buttonStatus = false;
  // buttonsTexts:Array<string> = ['First button'];

  // addButton(index:number):void {
  //   this.buttonsTexts = [...this.buttonsTexts, `button ${index}`];
  //  months = {
  //   "January":31, "February":28, "March":31, "April":30, "May":31, "June":30, "July":31, "August":31, "September":30, "October":31, "November":30, "December":31, 
  // };

  constructor() { }

  ngOnInit(): void {
  }

  // getbuttonCrap() {
  //   this.buttonStatus = !this.buttonStatus
  // }
  
  // originalOrder = (a: KeyValue<string, number>, b: KeyValue<string, number>): number => {
  //   return 0;
  // }

}