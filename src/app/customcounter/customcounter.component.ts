import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../shared/store/counter.actions';
import { CounterModel } from '../shared/store/counter.model';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.scss']
})
export class CustomcounterComponent {
  constructor(private store: Store<{counter: CounterModel}>) {

  }

  counterInput!: number;
  actionType = "add";

  onCustomIncrement() {
    this.store.dispatch(customIncrement({ value: +this.counterInput , action:this.actionType }));
  }

}
