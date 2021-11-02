import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  task:string = "";
  taskList:string[] = [];
  buttonStatus = false;
  @Input() dayNumber:number;
  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    this.taskList.push(this.task);
    this.task = "";
  }

  getbuttonCrap() {
    this.buttonStatus = !this.buttonStatus
  }
}
