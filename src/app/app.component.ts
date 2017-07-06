import { Component, OnInit } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TimerService]
})
export class AppComponent implements OnInit {
  title: string = 'App';
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

  constructor(private timerService: TimerService) { };
}
