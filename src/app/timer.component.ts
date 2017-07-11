import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, HostListener } from '@angular/core';
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
    private interval: number = null;

    @Output() onClose: EventEmitter<any> = new EventEmitter();
    @Output() onToggle: EventEmitter<{isRunning: boolean}> = new EventEmitter();

    @HostListener('click', ['$event']) click(event: MouseEvent) {
        if (event.toElement.tagName.toLowerCase() === 'input' || event.toElement.tagName.toLowerCase() === 'a') { return true; };
        this.toggle();
        this.onToggle.emit({isRunning: this.timerService.isRunning()});
    }

    ngOnInit(): void {
        this.timerService.state$.subscribe((state) => {
            if (state === true) {
                this.divClass = 'callout success';
                this.startInterval();
            } else {
                this.divClass = 'callout warning';
                this.stopInterval();
            }
        })
    }

    private startInterval(): void {
        if (this.interval !== null) { return; }

        this.interval = window.setInterval(this.updateDisplay.bind(this), 10);
    }

    private stopInterval(): void {
        if (this.interval === null) { return; }

        window.clearInterval(this.interval);
        this.interval = null;
    }

    private updateDisplay(): void {
        this.runtime = this.timerService.read();
        this.fractionalHours = (this.timerService.getTime() / 1000) / 3600;
    }

    ngOnDestroy(): void {
        this.stopInterval();
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
