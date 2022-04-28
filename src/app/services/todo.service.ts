import { Injectable, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos = <any>[];

  constructor() {}

  addTodo(label: string) {
    const randomId = Math.floor(Math.random() * 1000000);
    this.todos.push({
      id: randomId,
      label: label,
      completed: false,
    });
  }

  getTodos() {
    return this.todos;
  }

  toggleTodo(id: number) {
    this.todos.forEach((todo: { id: number; completed: boolean }) => {
      if (todo.id == id) {
        todo.completed = !todo.completed;
      }
    });
  }
}

// class Todo {

//   private id: number

//   public label 

//   public completed: boolean;

//   toggleTodo2(){
//     this.completed = !this.completed
//   }


// }
