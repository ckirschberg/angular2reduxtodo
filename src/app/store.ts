import { combineReducers } from 'redux';
import { todoReducer } from './todo.reducer';
import { Todo } from './todo';

export class IAppState {
  todos?: Todo[]; 
  //expand when needed.
};

export const rootReducer = combineReducers<IAppState>({
   todo: todoReducer
   //newReducerName: reducer
});

export const enhancers = [
];