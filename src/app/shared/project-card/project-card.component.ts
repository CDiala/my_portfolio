import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() url!: string;
  @Input() image!: string;
  @Input() title!: string;
  @Input() desc!: string;
  @Input() author!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
