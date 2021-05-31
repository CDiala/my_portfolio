import { Component, OnInit } from '@angular/core';
import { faComment, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  faEnvelop = faEnvelope;
  faUser = faUser
  faComment = faComment
  ngOnInit(): void {
  }

}
