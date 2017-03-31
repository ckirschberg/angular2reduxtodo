import { TodoState, IAppState } from './store';
import {todoReducer} from './todo.reducer';
import {Todo} from './todo';
import { TodoActions } from "./todo.actions";

var deepFreeze = require('deep-freeze');

function getStandardState() {
  return {
    todos: [ { text: 'Drink beer', done: false } ]
  } as TodoState;
}

describe('todo reducer', () => {

  it('should add a todo ', () => {
    let state = getStandardState();
    deepFreeze(state); // Applies deep freeze on the IAppState

    let newState = todoReducer(state, {
      type: TodoActions.ADD_TODO,
      payload: 'Party'
    });

    expect(newState).toEqual({
      todos: [
        {text: 'Drink beer', done: false},
        {text: 'Party', done: false}
      ]
    })

  })

})