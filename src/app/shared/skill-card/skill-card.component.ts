import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent implements OnInit {

  @Input() content!: string;
  @Input() image!: string;

  count!: number;
  extract!: string;

  // skill = '5 completed projects';
  constructor() { }

  ngOnInit(): void  {
    this.getCount();
  }

  getCount() {
    this.count = +this.content.split(' ')[0];
    this.extract = this.content.substring(this.content.indexOf(' '));
    // console.log('count:', this.count, 'extract:', this.extract);
    // console.log(this.content.split(' '));
    // console.log(this.content.split(' ').findIndex(char => char === ' '));
  }
}
