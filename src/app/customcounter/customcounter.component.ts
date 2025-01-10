import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../shared/store/counter.actions';
import { CounterModel } from '../shared/store/counter.model';
import { Observable, Subscription } from 'rxjs';
import { getChannelName } from '../shared/store/counter.selector';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.scss']
})
export class CustomcounterComponent implements OnInit{
  constructor(private store: Store<{counter: CounterModel}>) {

  }

  counterInput!: number;
  actionType = "add";
  channelName="";
  counterSubscribe !: Subscription;
  counter$ !: Observable<CounterModel>;
  


  ngOnInit(): void {
    this.counterSubscribe = this.store.select(getChannelName).subscribe(data => {
      this.channelName = data;
      console.log('custom counter');
    });
    this.counter$ = this.store.select('counter');
  }
  onCustomIncrement() {
    this.store.dispatch(customIncrement({ value: +this.counterInput , action:this.actionType }));
  }

}
