import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss',
})
export class TemplateDrivenFormsComponent {
  public listComida = signal<Array<{ comida: string; preco: string }>>([
    {
      comida: 'X-bur',
      preco: 'R$10',
    },
    {
      comida: 'X-bur312',
      preco: 'R$102',
    },
    {
      comida: 'X-buradsda',
      preco: 'R$103',
    },
  ]);

  public submitForm(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }
}
