import { Injectable } from '@angular/core';

@Injectable()
export class TimeSourceService {
    currentTimeMillis(): number {
        return (+ new Date());
    }

    currentDate(): Date {
        return new Date();
    }
}
