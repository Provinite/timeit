import { Component, OnInit } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
    selector: 'timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css'],
    providers: [TimerService]
})
export class TimerComponent implements OnInit {
    runtime: number = 0;

    ngOnInit(): void {
      let component = this;
      this.timerService.start();
      setInterval(() => {
          component.runtime = component.timerService.getTime() / 1000;
      }, 10);
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

    constructor(private timerService: TimerService) { };
}
