import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css'],
})
export class AddTodoFormComponent implements OnInit {
  @Output() getTodo = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  submitForm(form: NgForm) {
    console.log(form.value.label);
    this.getTodo.emit(form.value.label);
    form.reset();
  }
}
