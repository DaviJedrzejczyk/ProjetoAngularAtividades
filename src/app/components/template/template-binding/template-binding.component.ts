import { CommonModule } from '@angular/common';
import { Component, EmbeddedViewRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = "Testepaowdkpaowkdpoawkd"
  public isDisabled = false;
  public age = 23;

  public srcValue = "C:\\Users\\djedr\\OneDrive\\Imagens\\Capturas de tela\\Captura de tela 2024-02-07 140002.png"

  public isTextDecoration = this.age > 20 ? "underline" : "none"


  public Sum(){
    return this.age++;
  }

  public Sub(){
    return this.age--;
  }

  public onKeyDown(event:Event){
    return console.log(event);
  }

  public onMouseEvent(event: MouseEvent){
    return console.log(event);
  }
}
