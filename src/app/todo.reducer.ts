import { TodoActions } from './todo.actions';
import { IAppState } from './store';

const INITIAL_STATE: any = {
    todos: [ { text: 'Drink beer', done: false } ]
};


export function todoReducer(state: IAppState = INITIAL_STATE, action:any) {
  switch (action.type) {

    case TodoActions.ADD_TODO:
      return state;
    
    // case TodoActions.Other:
    //   return state; // or something.

    default:
      return state;
  }
}
