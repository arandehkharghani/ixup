import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { DialogService } from '../../core';

import * as core from '../../core';
import * as ixup from '../../ixup';

@Component({
    moduleId: module.id,
    templateUrl: 'linked-list-traversal.component.html',
})
export class LinkedListTraversalComponent implements OnInit {
    public linkedListForm: FormGroup;
    public the5thValue: string;

    private _list: ixup.LinkedList;
    private _array: string[] = [];

    constructor(
        private _dialogService: DialogService,
        private _svc: ixup.LinkedListTraversalService,
        private _fb: FormBuilder
    ) {
    }

    public ngOnInit() {
        this.linkedListForm = this._fb.group({
            val: ['', Validators.required],
        });
    }
    public onClearClicked() {
        this._list = null;
        this._array = [];
        this.the5thValue = '';
    }

    public onAdd(form: any) {
        if (!this._list) {
            this._list = { value: form.val, next: null };
            this._array = [form.val]
            return false;
        }
        // this array is only for the display
        this._array.push(form.val);

        // provide the linked list
        let local = this._list;
        while (local.next) {
            local = local.next;
        }
        local.next = { value: form.val, next: null };

        this.the5thValue = this._svc.traverse(this._list);
        return false;
    }
}