import { Routes } from '@angular/router';
import { MainFormComponent } from './components/main-form/main-form.component';
import { MainComponent } from './layouts/main/main.component';
import { TestListComponent } from './components/test-list/test-list.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        title: 'Home Page',
        component: TestListComponent,
      },
      {
        path: '1',
        title: 'Form',
        component: MainFormComponent,
      },
    ],
  },
];
