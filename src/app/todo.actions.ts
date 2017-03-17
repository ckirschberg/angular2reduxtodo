import { Todo } from './todo';
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store'
import { IAppState } from './store';

@Injectable()
export class TodoActions {

    constructor (
        private ngRedux: NgRedux<IAppState>) {
    }

    static ADD_TODO: string = 'ADD_TODO';
    static DELETE_TODO: string = 'DELETE_TODO';
    static UPDATE_TODO: string = 'UPDATE_TODO';

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
