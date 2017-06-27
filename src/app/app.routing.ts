import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InitialListComponent } from './initial-list/initial-list.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'initial-list',
    component: InitialListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
