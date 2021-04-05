import { Component, PLATFORM_ID, Inject } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { AuthActionTypes } from '@core/actions/auth.actions';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        @Inject(PLATFORM_ID) private platformId: Object, 
        // private store: Store<any>,
        public translate: TranslateService
    ){
        if(isPlatformBrowser(this.platformId)){
            translate.setDefaultLang('en');
            translate.addLangs(['en'])
        }
    }

  title = 'personal-website';
}
