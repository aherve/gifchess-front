import '../icons'
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FooterComponent} from './components/footer/footer.component';
import {LayoutComponent} from './components/layout/layout.component'
import {MaterialModule} from 'src/app/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaypalComponent} from './components/paypal/paypal.component';
import {HttpClientModule} from '@angular/common/http';
import {ShareButtonsModule} from '@ngx-share/buttons'
import {ApiService} from 'src/app/api.service';
import {AnalyticsService} from 'src/app/analytics.service';
import {LichessFormComponent} from './components/lichess-form/lichess-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LayoutComponent,
    PaypalComponent,
    LichessFormComponent
  ],
  imports: [
    HttpClientModule,
    ShareButtonsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiService, AnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
