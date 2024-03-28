import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';

function textValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const hasUpperCase = /[A-Z]/.test(control.value);
    const hasNumber = /[0-9]/.test(control.value);

    if (hasUpperCase && hasNumber) {
      return null;
    }
    return { invalidText: true };
  };
}

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  #fb = inject(FormBuilder);

  public profileForm = this.#fb.group({
    name: ['', [Validators.required, textValidator()]],
    myStacks: this.#fb.group({
      front: ['Angular'],
      back: ['C#'],
    }),

    myFavoriteFoods: this.#fb.array([['']]),
  });

  public updateName() {
    this.profileForm.patchValue({
      name: 'Testewpacja10',
      myStacks: {
        front: 'React',
        back: '.NET',
      },
    });
  }

  public addMyFavoriteFoods(newFood: string) {
    const myFavoriteFoods = this.profileForm.get(
      'myFavoriteFoods'
    ) as FormArray;
    const createNewFood = new FormControl(newFood);

    myFavoriteFoods.push(createNewFood);
  }

  public submit() {
    if (this.profileForm.valid) {
    }
  }
}
