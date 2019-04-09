import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import {Todo} from '../model/todo.model';
import * as fromFilter from '../../filter/filter.actions';

@Component({
    selector: 'app-todos-list',
    templateUrl: './todos-list.component.html',
    styles: []
})
export class TodosListComponent implements OnInit {
    filter: fromFilter.validFilters;
    todos: Todo[] = [];

    constructor(
        private store: Store<AppState>
    ) {
    }

    ngOnInit() {
        this.store.subscribe(state => {
            this.todos = state.todos;
            this.filter = state.filter;
        });
    }

}
