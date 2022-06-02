import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countExperience: number = new Date().getFullYear() - 2020;

  constructor() {}

  ngOnInit(): void {
  }


}
