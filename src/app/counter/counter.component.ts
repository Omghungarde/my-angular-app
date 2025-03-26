import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],

  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count=0

  handleCounter(val:string){
    if (val=='minus'){
      if(this.count>0){
      this.count =this.count-1
    }
  }
    else if(val=='plus'){
      this.count=this.count+1
    }
    else{
      this.count=0
    }
  }
}
