import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StartSectionsComponent } from './components/sections/start-sections/start-sections.component';
import { NotificationsSectionsComponent } from './components/sections/notifications-sections/notifications-sections.component';
import { PrimeNumbersSectionsComponent } from './components/sections/prime-numbers-sections/prime-numbers-sections.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { reducer as counterReducer } from './store/reducers/calculation.reducer';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StartSectionsComponent,
    NotificationsSectionsComponent,
    PrimeNumbersSectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    StoreModule.forRoot({
      counterReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
