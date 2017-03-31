import { TodoService } from './todo.service';
import { Response } from '@angular/http';
import { Todo } from './todo';
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store'
import { IAppState } from './store';

@Injectable()
export class TodoActions {

    constructor (
        private ngRedux: NgRedux<IAppState>,
        private todoService: TodoService) {
    }

    static ADD_TODO: string = 'ADD_TODO';
    static DELETE_TODO: string = 'DELETE_TODO';
    static UPDATE_TODO: string = 'UPDATE_TODO';

    static RETRIEVED_TODOS: string = 'RETRIEVED_TODOS';
    static FAILED_TODOS: string = 'FAILED_TODOS';

    getTodos(): any {
      
      this.todoService.getAllTodos().then((response: Response) => {
        this.ngRedux.dispatch({
          type: TodoActions.RETRIEVED_TODOS,
          payload: response
        });
      })
      .catch((error: Response) => {
        this.ngRedux.dispatch({
          type: TodoActions.FAILED_TODOS,
          payload: error
        });
      });
    }

    addTodo(userText: String): void {
        this.ngRedux.dispatch({
            type: TodoActions.ADD_TODO,
            payload: userText
        })
    }
    deleteTodo(todo: Todo) : void {
      this.ngRedux.dispatch({
        type: TodoActions.DELETE_TODO,
        payload: todo
      })
    }
    updateTodo(todo: Todo) : void {
      this.ngRedux.dispatch({
        type: TodoActions.UPDATE_TODO,
        payload: todo
      })
    }

}
