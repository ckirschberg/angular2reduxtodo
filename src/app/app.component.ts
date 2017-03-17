import { IAppState } from './store';
import { TodoActions } from './todo.actions';
import { Component, OnInit } from '@angular/core';
import { NgRedux } from "@angular-redux/store/lib";
import { Observable } from 'rxjs/Observable';
import { Todo } from "app/todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private todos$: Observable<Todo[]>;

  ngOnInit(): void {
    this.todos$ = this.ngRedux.select(store => store.todos.todos);
  }

  constructor(private todoActions: TodoActions,
    private ngRedux: NgRedux<IAppState>) { }

  onAddTodo(userText: String) : void {
    this.todoActions.addTodo(userText);
  }
  onDelete(todo: Todo) : void {
    this.todoActions.deleteTodo(todo);
  }
  onUpdate(todo: Todo) : void {
    this.todoActions.updateTodo(todo);
  }

}
