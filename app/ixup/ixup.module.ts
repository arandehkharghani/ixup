import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as core from '../core';
import * as ixup from '../ixup';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ixup.routing,
  ],
  declarations: [
    ixup.IxupComponent,
    ixup.LinkedListTraversalComponent,
    ixup.TriangleCategorisationComponent,
    ixup.WordReversalComponent,
  ],
  providers: [
    ixup.LinkedListTraversalService,
    ixup.TriangleCategeorisationService,
    ixup.WordReversalService,
  ],
})
export class IxupModule {
}
