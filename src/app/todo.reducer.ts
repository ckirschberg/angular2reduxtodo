import { TodoActions } from './todo.actions';
import { IAppState, TodoState } from './store';
import { Todo } from './todo';

const INITIAL_STATE: any = {
    todos: [ { text: 'Drink beer', done: false } ]
};


export function todoReducer(state: TodoState = INITIAL_STATE, 
  action:any) {

  switch (action.type) {

    case TodoActions.ADD_TODO:
      
      // Do not do this!
      console.log(action);
      console.log(state.todos);

      let newTodo = { text: action.payload, done: false } as Todo;

      //Object.assign
      let newState = Object.assign({}, state);
      newState.todos.push(newTodo);
      return newState;

      // return { 
      //   todos: state.todos.concat(newTodo) 
      // };


      // state.todos.push(newTodo);

      // return state;
    
    // case TodoActions.Other:
    //   return state; // or something.

    default:
      return state;
  }
}
