import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-me',
  imports: [],
  templateUrl: './practice-me.component.html',
  styleUrl: './practice-me.component.css'
})
export class PracticeMeComponent {
  name=""
  displayname =""

  getName(event:any){
    const Input = (event.target as HTMLInputElement).value;
    this.name=Input;
  }
  displayName(){
    this.displayname=this.name;
  }
  setName(){
    this.name = "askjdflkj"
  }

  email=""
  displayEmail = ""
  updateEmail(event: Event) {
    this.email = (event.target as HTMLInputElement).value; // Updates live
  }

  displayEmailValue() {
    this.displayEmail = this.email; // Updates only when button is clicked
  }

  setEmail() {
    this.email = "example@gmail.com";
    
  }
}
  