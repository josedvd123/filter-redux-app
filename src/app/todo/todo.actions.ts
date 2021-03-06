import {Action} from '@ngrx/store';

export const ADD_TODO = '[TODO] Add todo';
export const TOGGLE_TODO = '[TODO] Toogle todo';
export const TOGGLE_ALL_TODO = '[TODO] Toogle all todo';
export const EDIT_TODO = '[TODO] Edit todo';
export const DELETE_TODO = '[TODO] Delete todo';
export const DELETE_COMPLETED_TODOS = '[TODO] Delete completed todos';

export class AddTodoAction implements Action {
    readonly type = ADD_TODO;

    constructor(public text: string) {
    }
}

export class ToogleTodoAction implements Action {
    readonly type = TOGGLE_TODO;

    constructor(public id: number) {
    }
}

export class ToogleAllTodoAction implements Action {
    readonly type = TOGGLE_ALL_TODO;

    constructor(public completed: boolean) {
    }
}

export class EditTodoAction implements Action {
    readonly type = EDIT_TODO;

    constructor(public id: number, public text: string) {
    }
}

export class DeleteTodoAction implements Action {
    readonly type = DELETE_TODO;

    constructor(public id: number) {
    }
}

export class DeleteCompletedTodosAction implements Action {
    readonly type = DELETE_COMPLETED_TODOS;

    constructor() {
    }
}

export type Actions =
    AddTodoAction |
    ToogleTodoAction |
    ToogleAllTodoAction |
    EditTodoAction |
    DeleteTodoAction |
    DeleteCompletedTodosAction;
