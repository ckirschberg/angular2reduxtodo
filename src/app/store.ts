import { combineReducers } from 'redux';
import { todoReducer } from './todo.reducer';
import { Todo } from './todo';

export class TodoState {
    todos: Todo[];
    isCommunicate: boolean;
    //...
};

export class IAppState {
  todos?: TodoState; 
};

export const rootReducer = combineReducers<IAppState>({
   todos: todoReducer
   //newReducerName: reducer
});

export const enhancers = [
];