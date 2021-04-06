import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { PublicRoutingModule } from '@public/public-routing.module';
import { NavbarPublicComponent } from '@shared/components/navbar-public/navbar-public.component';
import { LayoutComponent } from '@public/layout/layout.component';
import { HomeComponent } from '@public/home/home.component';
import { ServicesComponent } from '@public/services/services.component';

@NgModule({
    declarations: [
        NavbarPublicComponent,
        HomeComponent,
        LayoutComponent,
        ServicesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PublicRoutingModule
    ]
})
export class PublicModule {}
