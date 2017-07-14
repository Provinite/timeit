import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, InjectionToken } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer.component';

import { TimeSourceService } from './time-source.service';
import { TimerDataStorageService } from './timer-data-storage.service';
import { LocalStorageService } from './local-storage.service';

@NgModule({
    declarations: [
        AppComponent,
        TimerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        TimeSourceService,
        LocalStorageService,
        TimerDataStorageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
