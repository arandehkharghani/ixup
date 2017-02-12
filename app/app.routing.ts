import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/ixup/word-reversal', pathMatch: 'full' },
  { path: 'ixup', loadChildren: 'app/ixup/ixup.module#IxupModule' },
];
export const routing = RouterModule.forRoot(routes);