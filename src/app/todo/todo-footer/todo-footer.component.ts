import {Component, OnInit} from '@angular/core';
import * as fromFilter from '../../filter/filter.actions';
import * as fromTodo from '../../todo/todo.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import {Todo} from '../model/todo.model';

@Component({
    selector: 'app-todo-footer',
    templateUrl: './todo-footer.component.html',
    styles: []
})
export class TodoFooterComponent implements OnInit {
    validFilters: fromFilter.validFilters[] = ['todos', 'completados', 'pendientes'];
    selectedFilter: fromFilter.validFilters;
    pending: number;

    constructor(
        private store: Store<AppState>
    ) {
    }

    ngOnInit() {
        this.store.subscribe(state => {
            this.countPending(state.todos);
            this.selectedFilter = state.filter;
        });
    }

    changeFilter(filter: fromFilter.validFilters) {
        const action = new fromFilter.SetFilterAction(filter);
        this.store.dispatch(action);
    }

    countPending(todos: Todo[]) {
        this.pending = todos.filter(todo => !todo.completed).length;
    }

    deleteCompletedTodos() {
        const action = new fromTodo.DeleteCompletedTodosAction();
        this.store.dispatch(action);
    }
}
