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
    templateUrl: 'triangle-categorisation.component.html',
})
export class TriangleCategorisationComponent implements OnInit {
    public triangleCategorisationForm: FormGroup;
    public type: string;

    constructor(
        private _dialogService: DialogService,
        private _svc: ixup.TriangleCategeorisationService,
        private _fb: FormBuilder
    ) {
    }

    public ngOnInit() {
        this.triangleCategorisationForm = this._fb.group({
            sideA: [''],
            sideB: [''],
            sideC: [''],
        });

        this.triangleCategorisationForm.valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe((form) => {
                this.type = this._svc.categorise(form);
            });
    }
}