import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jsh-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
public name='Cristina'
  constructor() { }
sayHello() {
    alert('Hello ' + this.name);
}
  ngOnInit() {
  }

}
