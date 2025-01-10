import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.scss']
})
export class CounterdisplayComponent implements OnInit, OnDestroy {
  constructor(private store: Store<{counter: CounterModel}>) {}

  counterDisplay!: number;
  channelName = '';

  counterSubscribe !: Subscription;
  counter$ !: Observable<CounterModel>;

  ngOnInit(): void {
    this.counterSubscribe = this.store.select('counter').subscribe(data => {
      this.counterDisplay = data.counter;
      this.channelName = data.channelName;
    });
    // the above subscription can be omitted, and we can directly store the 
    // return value in an observable counter$
    // in this case we don't even have to unsubscribe onDestroy

    this.counter$ = this.store.select('counter');
  }

  ngOnDestroy(): void {
    this.counterSubscribe.unsubscribe();
  }
}
