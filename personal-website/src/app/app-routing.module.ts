import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from '@public/public.component';
import { AdminComponent } from '@admin/admin.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: PublicComponent,
        loadChildren: () => import('@public/public.module').then(m => m.PublicModule)
    },
    {
        path: 'admin',
        component: AdminComponent,
        loadChildren: () => import('@admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: '**',
        redirectTo: '404'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
