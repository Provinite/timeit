import { Component, OnInit } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
    selector: 'timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css'],
    providers: [TimerService]
})
export class TimerComponent implements OnInit {
    runtime: number[] = [0,0,0,0];
    private divClass = "callout warning";

    ngOnInit(): void {
      let component = this;
      this.timerService.start();
      setInterval(() => {
          component.runtime = component.timerService.read();
      }, 10);
      
      this.timerService.state$.subscribe((state) => {
          if (state == true) {
              this.divClass = "callout success";
          } else {
              this.divClass = "callout warning";
          }
      })
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
