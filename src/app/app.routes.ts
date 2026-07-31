import { Routes } from '@angular/router';
import { Home } from './portfolio/pages/home/home';

export const routes: Routes = [
    {
        path:'',
        component: Home
    },
    {
        path:'**',
        redirectTo:''
    }
];
