import {
    ModuleWithProviders, NgModule,
    Optional, SkipSelf,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import * as core from '../core';

@NgModule({
    imports: [CommonModule],
    declarations: [
    ],
    exports: [
    ],
    providers: [
        { provide: core.appSettings, useValue: core.constAppSettings },
        core.DialogService,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
})
export class CoreModule {

    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: core.appSettings, useValue: core.constAppSettings },
                core.DialogService,
                { provide: LocationStrategy, useClass: HashLocationStrategy },
            ],
        };
    }
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}


