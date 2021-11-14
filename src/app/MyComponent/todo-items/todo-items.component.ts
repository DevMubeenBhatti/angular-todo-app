import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent implements OnInit {
  // reveive form first component todo list
  @Input()
  todo!: Todo;
  // send to first component imp eventEmitter from angular core
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo:Todo) {
    this.todoDelete.emit(todo);
    console.log("delete event fire");
  }
}
