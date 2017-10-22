import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() completed;
  @Input() title;
  @Input() i;
  @Output() remove: EventEmitter<number>;
  @Output() taskCompleted: EventEmitter<boolean>;

  constructor() {
    this.taskCompleted = new EventEmitter<boolean>();
    this.remove = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  delete(i) {
    this.remove.emit(i);
  }

  checked(state: boolean) {
    this.taskCompleted.emit(state);
  }


}
