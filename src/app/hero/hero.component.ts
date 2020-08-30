import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'jsh-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() hero:Hero;
 @Output() edit = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
callHero(){
  alert('Call '+this.hero.name+' '+this.hero.alterEgo+'!!!');}
editHero() {
//  alert('Edit hero with id: ' + this.hero.id);
 this.edit.emit(this.hero.id);
}
}


