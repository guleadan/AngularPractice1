import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todo;
  @Output() tododelete: EventEmitter<Todo>= new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }
  Delete(todo: Todo) {
    this.tododelete.emit(todo)
    console.log(
      "Deletion in progress."
    )
  }

}
