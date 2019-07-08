import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AgmMapComponent } from './agm-map/agm-map.component';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { ResizableComponent } from './resizable/resizable.component';
import { ResizableModule } from 'angular-resizable-element';
import { ResizableDirective } from './directives/resizable.directive';

@NgModule({
  declarations: [
    AppComponent,
    AgmMapComponent,
    ResizableComponent,
    ResizableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    AgmSnazzyInfoWindowModule,
    ResizableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
