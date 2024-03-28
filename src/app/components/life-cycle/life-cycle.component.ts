import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  signal,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifeCycleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterViewInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy
{
  constructor(private fb: FormBuilder) {}

  public myNumb = signal(0);
  @Input() set inputMyNumber(value: number) {
    this.myNumb.set(value);
  }

  ngOnDestroy(): void {} //So eh chamado quando vc destroi este component

  ngAfterViewChecked(): void {} //Ativa quando toda a view (html) for carregado apos uma ação

  ngAfterContentChecked(): void {} //Ativa quando o content estiver totalmente carregado e foi realmente mexido

  ngAfterContentInit(): void {}

  @ViewChild('content') public content!: ElementRef; //!: significa que vai ser undefined
  ngAfterViewInit(): void {
    console.log(this.content!.nativeElement.innerText);
  }

  ngDoCheck(): void {
    console.log();
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
