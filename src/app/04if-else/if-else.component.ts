import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  imports: [],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {
  display=true;
  ChangeDiv=true;
  hide(){
    this.display=false
  }
  show(){
    this.display=true
  }
  toggle(){
    this.display=!this.display
  }
  toggleDiv(){
    this.ChangeDiv=!this.ChangeDiv
  }


  color=342
  handleColor(val:number){
    this.color=val
  }
  handleInput(event:Event){
    this.color=parseInt((event.target as HTMLInputElement).value)
  }

  colorswitch = "Red";
  handleswitchColor(val:string){
    this.colorswitch=val;
  }
  handleSwitchInput(event:Event){
    this.colorswitch = (event.target as HTMLInputElement).value
  }
}
