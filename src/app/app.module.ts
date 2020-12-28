import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import {HttpClientModule} from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { MenuComponent } from './menu/menu.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DetailsComponent,
    MenuComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbDropdownModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
