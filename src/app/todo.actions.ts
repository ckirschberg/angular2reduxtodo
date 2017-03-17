import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store'
import { IAppState } from './store';

@Injectable()
export class TodoActions {

    constructor (
        private ngRedux: NgRedux<IAppState>) {
    }

    static ADD_TODO: string = 'ADD_TODO';

    addTodo(userText: String): void {
        this.ngRedux.dispatch({
            type: TodoActions.ADD_TODO,
            payload: userText
        })
    }
}
