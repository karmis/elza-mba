import { Routes } from '@angular/router';

import { HomeComponent } from './features/general/home/home.component'
import { NotFoundComponent } from './features/general/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: '**', component: NotFoundComponent }
];
