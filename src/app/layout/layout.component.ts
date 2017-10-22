import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

import { Task } from '../models/task.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  tasks: Task[];
  popup: boolean;
  title: string;
  tasksCompleted: number;

  constructor(private dataService: DataService) {
    this.tasks = [];
    this.popup = false;
    this.title = '';
    this.tasksCompleted = 0;
  }

  ngOnInit() {
    this.dataService.fetchData().subscribe(res => {
        this.tasks = res.tasks;
        for (let i = 0; i < this.tasks.length; i++)
          if (this.tasks[i].completed)
            this.tasksCompleted += 1;
      }
    );
  }

  delete(i) {
    if(this.tasks[i].completed)
      this.tasksCompleted -= 1;
    this.tasks.splice(i, 1);
  }

  popupToggle() {
    this.popup = !this.popup;
  }

  add() {
    if (this.title) {
      const newTask = new Task(this.title);
      this.tasks.push(newTask);
      this.popupToggle();
      this.title = '';
    }
    else {
      this.popupToggle();
      this.title = '';
    }
  }

  addCompletedTask(state: boolean) {
    if (state)
      this.tasksCompleted += 1;
    else
      this.tasksCompleted -= 1;
  }
}
