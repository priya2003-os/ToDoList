import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-layout',
  templateUrl: './todo-layout.component.html',
  styleUrls: ['./todo-layout.component.css'],
})
export class TodoLayoutComponent implements OnInit {
  todos = <any>[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
    console.log(this.todos);
  }

  toggleTodo(id: number) {
    this.todoService.toggleTodo(id);
    console.log(this.todos);
  }
}
