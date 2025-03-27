import { Component } from '@angular/core';
import { get } from 'http';

@Component({
  selector: 'app-getset',
  imports: [],
  templateUrl: './getset.component.html',
  styleUrl: './getset.component.css'
})
export class GetsetComponent {
  name=""
  displayname =""
  email=""
  email67=""
  getName(event:Event){
   const InputData=(event.target as HTMLInputElement).value; 
    
   this.name=InputData;  
    
  }
  displayName(){
    this.displayname=this.name;
  }
  setName(){
    this.name="John"
  }
  getEmail(val:string){
    console.log(val);
    this.email=val
    
  }
  setEmail(){
    this.email="example@gmail.com"
  }
}
