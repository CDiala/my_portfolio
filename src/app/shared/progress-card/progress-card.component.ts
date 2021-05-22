import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-card',
  templateUrl: './progress-card.component.html',
  styleUrls: ['./progress-card.component.css']
})
export class ProgressCardComponent {

  @Input('skill') skill!: string;
  @Input('level') level!: string;
  @Input('num') num!: string;
  
  constructor() { }

}
