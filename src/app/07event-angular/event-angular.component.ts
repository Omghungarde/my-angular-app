import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-event-angular',
  imports: [],
  templateUrl: './event-angular.component.html',
  styleUrl: './event-angular.component.css'
})
export class EventAngularComponent {
  handleEvent(event:Event){
    console.log("Function Called",event.type);
    // console.log("Function Called",event.target);
    // console.log("Function Called",(event.target as Element).className);
    // console.log("Function Called",(event.target as Element).classList);
    //  
  }
}
