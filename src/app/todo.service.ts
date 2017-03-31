import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Todo } from './todo';
import { Injectable } from '@angular/core';
// I want: Angular2 component - Injectable
// getAllTodos() - retrieve todos 
// saveTodo - Take a todo as a parameter
// deleteTodo - Take a string as a parameter (id)
// Hint: Use the http service. http.get("MyUrlToBeSomethingLater", ...).toPromise();

@Injectable()
export class TodoService {
  
  constructor(private http: Http) { }

  getAllTodos() {
    return this.http.get("blabla").toPromise();
  }
  saveTodo(todo: Todo): any {

  }
  deleteTodo(id: string) : any {
    
  }

}