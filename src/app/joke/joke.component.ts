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

  constructor() { }

  ngOnInit() {
  }

  deleteItem() {
    // alert('delete pressed');
    console.log('deleteItem called' + event);
    this.jokeDeleted.emit(this.data);
  }

}
