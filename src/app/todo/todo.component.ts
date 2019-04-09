import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {DeleteTodoAction, ToogleAllTodoAction} from './todo.actions';
import {AppState} from '../app.reducers';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styles: []
})
export class TodoComponent implements OnInit {
    completed = false;

    constructor(
        private store: Store<AppState>
    ) {
    }

    ngOnInit() {
    }

    toogleAll() {
        this.completed = !this.completed;
        const action = new ToogleAllTodoAction(this.completed);
        this.store.dispatch(action);
    }
}
