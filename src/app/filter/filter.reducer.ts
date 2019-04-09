import * as fromFilter from './filter.actions';

const initalStatus: fromFilter.validFilters = 'todos';

export function filterReducer(state = initalStatus, action: fromFilter.actions): fromFilter.validFilters {
switch (action.type) {
    case fromFilter.SET_FILTER:
        return action.filter;

    default:
        return state;
}
}
