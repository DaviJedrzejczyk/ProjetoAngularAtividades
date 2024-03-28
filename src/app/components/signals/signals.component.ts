import { CommonModule } from '@angular/common';
import { Component, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal("Davi ")
  public lastName = signal("Jedrzejczyk")

  public fullName = computed(() => {
    return this.firstName() + this.lastName()
  })

  public array = signal([1])

  constructor(){
    effect(() =>{
      console.log(this.firstName());
      console.log(this.array());
    })
  }

  public updateName(){
    return this.firstName.set("Sepawok ")
  }

  public updateArray(){
    this.array.update((oldValue: Array<number>) => {
      
      return [...oldValue, oldValue.length + 1];
    })
  }
}
