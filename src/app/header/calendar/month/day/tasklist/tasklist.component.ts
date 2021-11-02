import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  task:string = "";
  @Input() taskList:string[] = [];
  buttonStatus = false;
  
  constructor() { }

  ngOnInit(): void {
  }

// create if statement to ensure an empty string and duplicate text isn't added (once dictionary is built for hour
// and minute in day update addTask to allow duplicates (will map to dictionary key for delete task)

  addTask() {
    this.taskList.push(this.task);
    this.task = "";
  }

  getbuttonCrap() {
    this.buttonStatus = !this.buttonStatus;
    console.log(this.taskList)
  }

  deleteTask(element: string) {
    this.taskList.forEach((value,index)=>{
      if(value==element) this.taskList.splice(index,1);
    })
  }
  
}