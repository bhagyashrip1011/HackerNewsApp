import { Routes } from '@angular/router';
import {NewsComponent } from '../app/news/news.component';
export const routes: Routes = [
    {
      path: '', component: NewsComponent,pathMatch: 'full'
    },
    {
        path: 'stories', component: NewsComponent
    }

  ];
