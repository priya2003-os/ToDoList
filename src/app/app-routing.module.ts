import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';
import { TodoLayoutComponent } from './components/todo-layout/todo-layout.component';

const routes: Routes = [
  {
    path: 'all',
    component: AddTodoFormComponent,
  },
  {
    path: 'active',
    component: TodoLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
