import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from '../todo/model/todo.model';
import * as fromFilter from './filter.actions';

@Pipe({
    name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

    transform(todos: Todo[], filter: fromFilter.validFilters): Todo[] {
        switch (filter) {
            case 'completados':
                return todos.filter(todo => todo.completed);

            case 'pendientes':
                return todos.filter(todo => !todo.completed);

            default:
                return todos;
        }

        return todos;
    }

}
