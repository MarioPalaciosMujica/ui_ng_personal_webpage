import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authReducer } from '@core/reducers/auth.reducer';
import { PublicComponent } from '@public/public.component';
import { AdminComponent } from '@admin/admin.component';
import { SharedModule } from '@shared/shared.module';

export function HttpLoaderFactory(http: HttpClient){
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

// export function HttpLoaderFactory(http: HttpClient) {
//     return new TranslateHttpLoader(http);
// }

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
    StoreModule.forFeature('authReducer', authReducer),
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        },
        defaultLanguage: 'en'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
