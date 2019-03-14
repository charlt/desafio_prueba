import {RouterModule, Router} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
//archivos de rutas para trabajar con parametros dinamicoss
const APP_ROUTES=[
    {path:'home', component:HomeComponent},
    {path:'detail/:id', component:DetailComponent},
    {path:'**',pathMatch:'full',redirectTo:'home'}
];
export const app_routing=RouterModule.forRoot( APP_ROUTES );