import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Task from '../Models/Task';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo = new EventEmitter();
  text: string = '';
  constructor() {}

  ngOnInit(): void {}
  create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  }

  addNew() {
    const todo = new Task(this.create_UUID(), this.text, false);
    // console.log('ffss');
    this.addTodo.emit(todo);
    this.text = '';
  }
}
