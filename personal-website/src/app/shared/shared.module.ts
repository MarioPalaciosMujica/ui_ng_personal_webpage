import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// layouts modules
import { FooterComponent } from '@shared/components/footer/footer.component';
// import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
// import { NavbarPublicComponent } from '@shared/components/navbar-public/navbar-public.component';
// modals modules

@NgModule({
    declarations: [
        FooterComponent
        // NavbarAdminComponent
        // NavbarPublicComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule {}
