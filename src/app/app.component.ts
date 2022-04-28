import { Component, EventEmitter, Input } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ToDoList';
  todos = <any>[];
  // @Input() todoList = new EventEmitter<string>();

  constructor(private todoService: TodoService) {}

  onGetTodo(label: string) {
    this.todoService.addTodo(label);
  }

  // addItem(title): void {}
}
