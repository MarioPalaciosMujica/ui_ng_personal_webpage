import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '@public/layout/layout.component';

const routes: Routes = [
    { 
        path: 'home',
        component: LayoutComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PublicRoutingModule {}
