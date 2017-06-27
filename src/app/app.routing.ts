import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InitialListComponent } from './initial-list/initial-list.component';
import { InitialCreateComponent } from './initial-create/initial-create.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'initial-list',
    component: InitialListComponent
  },
  {
    path: 'new-initial',
    component: InitialCreateComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
