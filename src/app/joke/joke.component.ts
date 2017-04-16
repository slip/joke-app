import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input('joke') data: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();

  constructor() {
    console.log(`new - data is ${this.data}`);
  }

  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.data}`);
  }

  ngOnInit() {
    console.log(`ngOnInit - data is ${this.data}`);
  }

  ngDoCheck() {
    console.log(`ngDoCheck`);
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit`);
  }

  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked`);
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit`);
  }

  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked`);
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy`);
  }

  deleteItem() {
    // alert('delete pressed');
    console.log('deleteItem called' + event);
    this.jokeDeleted.emit(this.data);
  }

}
