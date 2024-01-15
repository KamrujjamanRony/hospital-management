import { Routes } from '@angular/router';
import { MainFormComponent } from './components/main-form/main-form.component';
import { MainComponent } from './layouts/main/main.component';
import { TestListComponent } from './components/test-list/test-list.component';
import { AddTestComponent } from './components/add-test/add-test.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        title: 'Home Page',
        component: AddTestComponent,
      },
      {
        path: 'test-list',
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
