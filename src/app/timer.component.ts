import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { TimerService } from './timer.service';

export class TimerData {
    name: string;
    time: number;
    constructor(name = "", time = 0) {
        this.name = name;
        this.time = time;
    }
}


@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css'],
    providers: [TimerService]
})
export class TimerComponent implements OnInit, OnDestroy {
    @Input() showCloseButton = false;
    @Input() name = '';
    @Input() elapsedTime = 0;

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
        });

        // make sure to force elapsedTime to a numeric type
        this.elapsedTime = parseInt(this.elapsedTime.toString(), 10);
        this.timerService.init(this.elapsedTime);
        this.updateDisplay();
    }

    private startInterval(): void {
        if (this.interval !== null) { return; }

        this.interval = window.setInterval(this.updateDisplay.bind(this), 45);
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
    
    public getTime(): number {
        return this.timerService.getTime();
    }
    
    public getName(): string {
        return this.name;
    }
    
    public export(): TimerData {
        return new TimerData(this.name, this.getTime());
    }
    
    public import(timerData: TimerData): void {
        this.name = timerData.name;
        this.timerService.init(timerData.time);
        this.updateDisplay();
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
