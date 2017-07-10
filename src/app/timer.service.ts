import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { TimeSourceService } from './time-source.service';

@Injectable()
export class TimerService {
    private initTime: number;
    private running = false;
    private accumulatedTime = 0;
    private stateSource = new Subject<boolean>();
    state$ = this.stateSource.asObservable();
    
    constructor(private timeSource: TimeSourceService) {
        
    }
    
    public reset(): void {
        this.running = false;
        this.accumulatedTime = 0;
        this.initTime = this.timeSource.currentTimeMillis();
        this.stateSource.next(false);
    }

    public start(): void {
        if (this.isRunning()) { return };
        this.running = true;
        this.initTime = this.timeSource.currentTimeMillis();
        this.stateSource.next(true);
    }

    public stop(): void {
        if (!this.isRunning()) { return };
        this.running = false;
        this.accumulatedTime += this.getSegmentRunningTime();
        this.stateSource.next(false);
    }

    public toggle(): void {
        if (!this.isRunning()) {
            this.start();
        } else {
            this.stop();
        }
    }

    public isRunning(): boolean {
        return this.running;
    }

    public getTime(): number {
        if (!this.isRunning()) {
            return this.accumulatedTime;
        }
        return this.getTotalRunningTime();
    }

    public read(): number[] {
        let time = Math.floor(this.getTime() / 10);
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        let centiseconds = 0;

        centiseconds = time % 100;
        time = (time - centiseconds) / 100;
        seconds = time % 60;

        time = (time - seconds) / 60;
        minutes = time % 60;

        time = (time - minutes) / 60;
        hours = time;

        if (minutes < 1) {
            minutes = 0;
        }

        if (hours < 1) {
            hours = 0;
        }
        if (seconds < 1) {
            seconds = 0;
        }

        return [hours, minutes, seconds, centiseconds];
    }

    private getSegmentRunningTime(): number {
        return this.timeSource.currentTimeMillis() - this.initTime;
    }

    private getTotalRunningTime(): number {
        return this.getSegmentRunningTime() + this.accumulatedTime;
    }
}
