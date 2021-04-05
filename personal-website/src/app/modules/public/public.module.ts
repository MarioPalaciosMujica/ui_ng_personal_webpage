import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { PublicRoutingModule } from '@public/public-routing.module';
import { HomeComponent } from '@public/home/home.component';
import { NavbarPublicComponent } from '@shared/components/navbar-public/navbar-public.component';

@NgModule({
    declarations: [
        NavbarPublicComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PublicRoutingModule
    ]
})
export class PublicModule {}
