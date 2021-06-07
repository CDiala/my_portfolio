import { Component, OnInit } from '@angular/core';
import { faComment, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { setTimeout } from 'timers';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  faEnvelop = faEnvelope;
  faUser = faUser;
  faComment = faComment;
  success?: boolean;

  mailForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    comment: new FormControl('', Validators.required)
  });

  get name() {
    return this.mailForm.get('name');
  }

  get email() {
    return this.mailForm.get('email');
  }

  get comment() {
    return this.mailForm.get('comment');
  }

  ngOnInit(): void {
  }

  onSubmit($event: any) {
    console.log('hello', this.mailForm.value);
    this.success = true;

    setTimeout(() => {
      this.mailForm.reset();
      this.success = false;
    }, 5000) 
  }
}