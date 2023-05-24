import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs'

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.scss']
})
export class CurrentTimeComponent implements OnInit,OnDestroy {
  currentTime!: string;
  private timerSubscription!: Subscription;
  
  ngOnInit(): void {
    this.timerSubscription = interval(1000).subscribe(() => {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      this.currentTime = `${hours}:${minutes}`;
    });
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }
}
