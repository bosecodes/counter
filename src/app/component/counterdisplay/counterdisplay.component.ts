import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterModel } from 'src/app/shared/store/counter.model';
import { getCounter } from 'src/app/shared/store/counter.selector';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.scss']
})
export class CounterdisplayComponent implements OnInit, OnDestroy {
  constructor(private store: Store<{counter: CounterModel}>) {}

  counterDisplay!: number;

  counterSubscribe !: Subscription;
  counter$ !: Observable<CounterModel>;

  ngOnInit(): void {
    this.counterSubscribe = this.store.select(getCounter).subscribe(data => {
      this.counterDisplay = data;
      console.log('counter display');
    });
    // the above subscription can be omitted, and we can directly store the 
    // return value in an observable counter$
    // in this case we don't even have to unsubscribe onDestroy

  }

  ngOnDestroy(): void {
    this.counterSubscribe.unsubscribe();
  }
}
