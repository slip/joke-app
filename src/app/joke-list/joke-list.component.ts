import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke("I asked a statistician for her phone number…","She gave me an estimate."),
      new Joke("Statistics are like a bikini.","What they reveal is suggestive, but what they conceal is vital."),
      new Joke("If you live to be a hundred, you've got it made.","Statistically very few people die past that age."),
    ];
  }

  ngOnInit() {
  }

  addJoke(joke) {
    this.jokes.unshift(joke);
  }

}
