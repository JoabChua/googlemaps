import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AgmMapComponent } from './agm-map/agm-map.component';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

@NgModule({
  declarations: [
    AppComponent,
    AgmMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot(),
    AgmSnazzyInfoWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
