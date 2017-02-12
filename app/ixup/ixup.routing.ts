import {
  Routes,
  RouterModule,
} from '@angular/router';

import { IxupComponent, WordReversalComponent, TriangleCategorisationComponent, LinkedListTraversalComponent } from '../ixup';

const routes: Routes = [
  {
    path: '', component: IxupComponent, children: [
      {
        path: '', component: WordReversalComponent,
      },
      {
        path: 'linked-list-traversal', component: LinkedListTraversalComponent,
      },
      {
        path: 'word-reversal', component: WordReversalComponent,
      },
      {
        path: 'triangle-categorisation', component: TriangleCategorisationComponent,
      },
    ],
  },
];

export const routing = RouterModule.forChild(routes);