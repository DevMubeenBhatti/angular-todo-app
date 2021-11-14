import { Component, OnInit, ɵSafeScript } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  localItem: string | null ;
  todos: Todo[];
  title = "Todo Loading...";

  
  constructor() {
    this.localItem= localStorage.getItem("todos");

    if(this.localItem == null ){
      this.todos = [];
    }else{
      this.todos = JSON.parse(this.localItem);
    }

    setTimeout(() => {
      this.title = `Welcome`;
    }, 2000)

    // this.todos = [
    //   {
    //     sno: 1, 
    //     title: "this is title one 1",
    //     desc: "descripition",
    //     active: true
    //   },
    //   {
    //     sno: 2,
    //     title: "this is title one 2",
    //     desc: "descripition",
    //     active: true
    //   },
    //   {
    //     sno: 3,
    //     title: "this is title one 3",
    //     desc: "descripition",
    //     active: true 
    //   }
    // ]

  }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    // array list of todos splice delete
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    // save in local storage
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  todoAdd(todo:Todo){
    console.log(todo);
    // array list of todos push add
    this.todos.push(todo);
    // save in local storage
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
