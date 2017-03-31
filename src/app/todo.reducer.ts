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
      // console.log("in the update part of the reducer. Update this todo", 
      //   action.payload);

      // Mark's solution. Please write your own, thank you.
      // return { 
      //   todos: state.todos.map(todo => {
        
      //   if (todo.text !== action.payload.text) {
      //     return todo;
      //   }
      //   return { text: action.payload.text, done: !action.payload.done }
      // })}


      // // Copy todo obj. and toggle done
      // let newObj = Object.assign({}, action.payload.todo);
      // newObj.done = !newObj.done;
      
      // // Take array up to the todo's index, and after index+1. Insert new obj. in between.
      // let updatedState = [
      //   ...state.todos.slice(0, action.payload.index),
      //   newObj,
      //   ...state.todos.slice(action.payload.index+1)
      // ];

      // return Object.assign({}, state, { todos: updatedState });
      

      // return state;

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
