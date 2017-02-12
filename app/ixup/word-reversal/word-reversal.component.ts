import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { DialogService } from '../../core';

import * as core from '../../core';
import * as ixup from '../../ixup';

@Component({
    moduleId: module.id,
    templateUrl: 'word-reversal.component.html',
})
export class WordReversalComponent implements OnInit {
    public wordReversalForm: FormGroup;
    public reversed: string;

    constructor(
        private _dialogService: DialogService,
        private _svc: ixup.WordReversalService,
        private _fb: FormBuilder
    ) {
    }

    public ngOnInit() {
        this.wordReversalForm = this._fb.group({
            sentence: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            reversed: [''],
        });

        this.wordReversalForm.controls['sentence'].valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe((value) => {
                this.reversed = this._svc.reverse(value);
            });
    }
}