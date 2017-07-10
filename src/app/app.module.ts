import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer.component';

import { TimeSourceService } from './time-source.service';

@NgModule({
    declarations: [
        AppComponent,
        TimerComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        TimeSourceService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
