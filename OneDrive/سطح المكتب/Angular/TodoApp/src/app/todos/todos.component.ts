import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos = [
    {
      id: 1,
      name: 'salim',
      completed: true,
    },
    {
      id: 2,
      name: 'Ahmed',
      completed: false,
    },
    {
      id: 3,
      name: 'Kamel',
      completed: false,
    },
  ];
  constructor() {}
  toggleEvent(task) {
    this.todos = this.todos.map((item) => {
      if (task.id === item.id) item.completed = !item.completed;
      // console.log(task.id === item.id);
      return item;
    });
  }

  deleteTask(task) {
    this.todos = this.todos.filter((item) => {
      return item.id != task.id;
    });
  }

  addNew(task) {
    return this.todos.push(task);
  }
  ngOnInit(): void {}
}
