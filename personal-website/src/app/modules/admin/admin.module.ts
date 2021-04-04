import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { AdminRoutingModule } from '@admin/admin-routing.module';
import { NavbarAdminComponent } from '@shared/components/navbar-admin/navbar-admin.component';

@NgModule({
    declarations: [
        NavbarAdminComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AdminRoutingModule
    ]
})
export class AdminModule {}
