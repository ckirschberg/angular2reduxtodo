import { combineReducers } from 'redux';
import { todoReducer } from './todo.reducer';
import { Todo } from './todo';

export class TodoState {
    todos: Todo[];
    isCommunicate: boolean;
    //...
};

// export class UserState {
//     users: User[];
//     isCommunicate: boolean;
//     //...
// };
export class IAppState {
  todos?: TodoState; 
  //users?: UserState;
};

export const rootReducer = combineReducers<IAppState>({
   todos: todoReducer
   //newReducerName: reducer
});

export const enhancers = [
];