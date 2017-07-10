import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { TimerComponent } from './timer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
    title = 'App';
    timers = [0];
    private maxTimer = 0;
    @ViewChildren(TimerComponent) timerComponents: QueryList<TimerComponent>;

    ngOnInit(): void {
    }

    clk(e: number, event: MouseEvent): boolean {
        if (event.toElement.tagName.toLowerCase() === 'input' || event.toElement.tagName.toLowerCase() === 'a') { return true; };
        const idx = this.timers.indexOf(e);
        const components = this.timerComponents.toArray();
        components[idx].toggle();
        const newState = components[idx].timerService.isRunning();
        // we started a timer. stop the others
        if (newState) {
            for (const c of components) {
                if (c !== components[idx]) {
                    c.stop();
                }
            }
        }
    }

    doClose(timer: number): void {
        const idx = this.timers.indexOf(timer);
        this.timers.splice(idx, 1);
    }

    clkAddTimer(): void {
        this.timers.push(++this.maxTimer);
    }

    ngAfterViewInit(): void {
        this.timerComponents.map((t) => t.stop());
    }
}
