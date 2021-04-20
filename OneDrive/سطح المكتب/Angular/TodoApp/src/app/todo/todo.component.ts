import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Task from '../Models/Task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() task!: Task;
  @Output() toggleTask = new EventEmitter();
  @Output() deleteTask = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  toggle() {
    // console.log(this.task);
    this.toggleTask.emit(this.task);
  }

  delete() {
    this.deleteTask.emit(this.task);
  }
}
