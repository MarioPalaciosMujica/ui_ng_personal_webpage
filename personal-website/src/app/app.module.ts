import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authReducer } from '@core/reducers/auth.reducer';
import { PublicComponent } from '@public/public.component';
import { AdminComponent } from '@admin/admin.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('authReducer', authReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
