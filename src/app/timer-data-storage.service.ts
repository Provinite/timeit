import { Injectable } from '@angular/core';
import { StorageHandler } from './storage-handler';
import { TimerData } from './timer.component';
import { LocalStorageService } from './local-storage.service';
@Injectable()
export class TimerDataStorageService implements StorageHandler<number, TimerData> {
    private keyName = 'timer.timers';
    constructor(private storageService: LocalStorageService) {
        if (this.storageService.get(this.keyName) == null) {
            this.storageService.put(this.keyName, {});
        }
    }

    private timers() {
        return this.storageService.get(this.keyName);
    };

    public clear() {
        this.storageService.put(this.keyName, {});
    }

    public save(id: number, data: TimerData): void {
        const timers = this.timers();
        timers[id] = data;
        this.storageService.put(this.keyName, timers);
    }

    public delete(id: number) {
        const timers = this.timers();
        delete timers[id];
        this.storageService.put(this.keyName, timers);
    }

    public load(id: number): TimerData {
        return this.timers()[id];
    }

    public loadAll(): TimerData[] {
        const result = [];
        const timers = this.timers();
        for (const timer in timers) {
            if (timers.hasOwnProperty(timer)) {
                result.push(timers[timer]);
            }
        }
        console.log('Loaded all timers');
        console.log(result);
        return result;
    }

}
