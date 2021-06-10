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
  isFocused: boolean = false;
  isFocusedE: boolean = false;
  isFocusedC: boolean = false;

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

    this.mailForm.reset();
    setTimeout(() => {
      this.success = false;
    }, 5000) 
  }

  onFocus($event: any) {
    ($event.target.id === 'name') ? this.isFocused = true : ($event.target.id === 'email') ? this.isFocusedE = true : ($event.target.id === 'comment') ? this.isFocusedC = true : [this.isFocused = false, this.isFocusedE = false, this.isFocusedC = false];
    // console.log("onClick", $event.target.id);
  }

  onFocusOut($event: any) {
    ($event.target.id === 'name') ? this.isFocused = false : ($event.target.id === 'email') ? this.isFocusedE = false : ($event.target.id === 'comment') ? this.isFocusedC = false : null;
    // console.log("onClick", $event.target.id);
  }

}