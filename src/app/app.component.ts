import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, HostListener } from '@angular/core';
import { TimerComponent, TimerData } from './timer.component';
import { TimerDataStorageService } from './timer-data-storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
    title = 'App';
    timers = [{id: 0, data: new TimerData()}];
    private maxTimer = 0;
    private saveOnNextCheck = false;

    @ViewChildren(TimerComponent) timerComponents: QueryList<TimerComponent>;

    constructor(private timerDataStorageService: TimerDataStorageService) {};

    @HostListener('window:beforeunload', ['$event'])
    saveFullState() {
        const components = this.timerComponents.toArray();
        for (let i = 0; i < components.length; i++) {
            this.timers[i].data = components[i].export();
        }
        let i = 0;
        this.timerDataStorageService.clear();
        for (const timer of this.timers) {
            this.timerDataStorageService.save(i++, timer.data);
        }
    }

    ngOnInit(): void {
        const timers = this.timerDataStorageService.loadAll();
        if (timers.length !== 0) {
            this.timers = [];
        }
        let i = 0;
        for (const t of timers) {
            this.timers.push({id: i++, data: t});
        }
        this.maxTimer = i;
        window.setInterval(this.saveFullState.bind(this), 1000);
    }

    toggled(e: number, event): void {
        const idx = this.timers.findIndex(a => a.id === e);
        const components = this.timerComponents.toArray();
        const newState = event.isRunning;
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
        const idx = this.timers.findIndex(a => a.id === timer);
        this.timers.splice(idx, 1);
    }

    clkAddTimer(): void {
        this.timers.push({id: ++this.maxTimer, data: new TimerData()});
    }

    ngAfterViewInit(): void {
        this.timerComponents.map((t) => t.stop());
    }

}
