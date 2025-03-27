import { Component, computed, effect, signal, WritableSignal, Signal } from '@angular/core';
import { log } from 'console';


@Component({
  selector: 'app-signals-all',
  imports: [],
  templateUrl: './signals-all.component.html',
  styleUrl: './signals-all.component.css'
})
export class SignalsAllComponent {
  count=signal(10);
  x=20;
  // constructor(){
  //   effect(()=>{
  //     console.log(this.count());
  //     // console.log(this.x);
      
  //   })
  // }

  icrementCount(){
    this.count.set(this.count()+1)
  }
  icrementVariable(){
    this.x= this.x+1;
  }
  // -------------------------------------------------
  counte=signal(10);
  updateValue(val:string){
    if(val=="dec"&& this.counte()>0){
      this.counte.set(this.counte()-1)
    }
    else if(val=="inc"){
      this.counte.set(this.counte()+1)
    }
  }
  // ---------------changing data type---------------

  data:WritableSignal<number | string> = signal(10); //this is writable change the value of variable it is also called data type for values

  data1= signal<number|string>(10); // this is directly change the value of signal it is called data type for signals
// No any difference between this two

  count2:Signal<number> = computed(()=>200)
  updateSignal(){
    this.data.set("Interger to String")
    this.data1.set("Interger to String")     
  }

  data3=signal(12)
  updatethroughUpdate(){
    this.data3.update((val)=>val+1)
  }
  // COMPUTED SIGNAL PROPER USE---------------------
  

  a=signal(10);
  b=signal(20);
  z=computed(()=>this.a()+this.b())

  computedFunction(){
    console.log(this.z());
    this.a.set(50)
    console.log((this.z()));
  }

  // without using computed
  a1=signal(10);
  b1=signal(20);
  z1=this.a1()+this.b1()

  WithoutcomputedFunction(){
    console.log(this.z1);
    this.a1.set(50)
    console.log((this.z1));
  }


  // something new------

  countNo = signal(0)
  displayHeading = false

  constructor(){
    effect(()=>{
      if(this.countNo() == 2){
        this.displayHeading=true
        setTimeout(() => {
          this.displayHeading=false
        }, 2000);
      }
      
      else{
        this.displayHeading=false
      }
    })
  }
  new(){
    this.countNo.set(this.countNo()+1)
  }

}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     