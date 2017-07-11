import { Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import { TimerService } from './timer.service';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css'],
    providers: [TimerService]
})
export class TimerComponent implements OnInit, OnDestroy {
    @Input() showCloseButton = false;

    runtime: number[] = [0, 0, 0, 0];
    fractionalHours = 0;
    public divClass = 'callout warning';
    private interval: number;

    @Output() onClose: EventEmitter<any> = new EventEmitter();

    ngOnInit(): void {
        const component = this;
        this.interval = window.setInterval(() => {
            component.runtime = component.timerService.read();
            component.fractionalHours = (component.timerService.getTime() / 1000) / 3600;
        }, 10);

        this.timerService.state$.subscribe((state) => {
            if (state === true) {
                this.divClass = 'callout success';
            } else {
                this.divClass = 'callout warning';
            }
        })
    }

    ngOnDestroy(): void {
        window.clearInterval(this.interval);
    }

    close(): void {
        this.onClose.emit();
    }

    toggle(): void {
        this.timerService.toggle();
    }

    stop(): void {
        this.timerService.stop();
    }

    start(): void {
        this.timerService.start();
    }

    constructor(public timerService: TimerService) { };
}
