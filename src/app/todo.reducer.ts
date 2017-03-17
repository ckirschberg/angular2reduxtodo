import { TodoActions } from './todo.actions';
import { IAppState, TodoState } from './store';
import { Todo } from './todo';

const INITIAL_STATE: any = {
    todos: [ { text: 'Drink beer', done: false } ]
};


export function todoReducer(state: TodoState = INITIAL_STATE, 
  action:any) {

  switch (action.type) {
    case TodoActions.DELETE_TODO:
      console.log("in the delete reducer. Delete this todo", 
        action.payload);

        // Copy the state object
        // Remove the "correct" todo.
        
      return state;
    
    case TodoActions.UPDATE_TODO:
      console.log("in the update part of the reducer. Update this todo", 
        action.payload);

      // Create a new state object
      // replace the "correct" todo with the todo in action.payload.


      return state;

    case TodoActions.ADD_TODO:
      let newTodo = { text: action.payload, done: false } as Todo;

      //Object.assign
      let newState = Object.assign({}, state);
      newState.todos.push(newTodo);
      return newState;

      // return { 
      //   todos: state.todos.concat(newTodo) 
      // };
    
    // case TodoActions.Other:
    //   return state; // or something.

    default:
      return state;
  }
}
