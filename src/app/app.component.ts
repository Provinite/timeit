import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { TimerComponent } from './timer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'App';
  runtime: number = 0;
  timers = [0];
  @ViewChildren(TimerComponent) timerComponents: QueryList<TimerComponent>;
  
  ngOnInit(): void {
  }
  
  clk(e): void {
      const components = this.timerComponents.toArray();
      components[e].toggle();
      const newState = components[e].timerService.isRunning();
      //we started a timer. stop the others
      if (newState) {
          for (let c of components) {
              if (c != components[e])
                c.stop();
          }
      }
  }
  
  clkAddTimer(): void {
      const maxTimer = this.timers.length;
      this.timers.push(maxTimer);
  }
  
  ngAfterViewInit(): void {
      console.log(this.timerComponents);
      this.timerComponents.map((t) => t.stop());
  }
}
