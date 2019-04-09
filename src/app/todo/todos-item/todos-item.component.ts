import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from '../model/todo.model';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import {DeleteTodoAction, EditTodoAction, ToogleTodoAction} from '../todo.actions';

@Component({
    selector: 'app-todos-item',
    templateUrl: './todos-item.component.html',
    styles: []
})
export class TodosItemComponent implements OnInit {
    @Input() todo: Todo;
    @ViewChild('txtInputFisico') txtInputFisico: ElementRef;
    chkField: FormControl;
    txtInput: FormControl;

    editing: boolean;

    constructor(
        private store: Store<AppState>
    ) {
    }

    ngOnInit() {
        this.chkField = new FormControl(this.todo.completed);
        this.txtInput = new FormControl(this.todo.text, Validators.required);
        this.chkField.valueChanges
            .subscribe(() => {
                const action = new ToogleTodoAction(this.todo.id);
                this.store.dispatch(action);
            });
    }

    edit() {
        this.editing = true;
        setTimeout(() => {
            this.txtInputFisico.nativeElement.select();
        }, 1);
    }

    endEdition() {
        this.editing = false;

        if (this.txtInput.invalid) {
            return;
        }

        if (this.txtInput.value === this.todo.text) {
            return;
        }

        const action = new EditTodoAction(this.todo.id, this.txtInput.value);
        this.store.dispatch(action);
    }

    deleteTodo() {
        const action = new DeleteTodoAction(this.todo.id);
        this.store.dispatch(action);
    }

}
