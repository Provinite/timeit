import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
    private initTime: Date;
    private running: boolean = false;
    private accumulatedTime: number = 0;

    public reset(): void {
        this.running = false;
        this.accumulatedTime = 0;
        this.initTime = new Date();
    }

    public start(): void {
        if (this.isRunning()) return;
        this.running = true;
        this.initTime = new Date();
    }

    public stop(): void {
        if (!this.isRunning()) return;
        this.running = false;
        this.accumulatedTime += this.getSegmentRunningTime();
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

    private getSegmentRunningTime(): number {
        return (+ new Date()) - (+ this.initTime);
    }

    private getTotalRunningTime(): number {
        return this.getSegmentRunningTime() + this.accumulatedTime;
    }
}
