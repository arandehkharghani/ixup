import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { constAppSettings, appSettings, CoreModule } from './core';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { routing } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        CoreModule.forRoot(),
        HttpModule,
    ],
    bootstrap: [AppComponent],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
})
export class AppModule { }
