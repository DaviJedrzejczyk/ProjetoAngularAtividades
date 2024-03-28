import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { SignalsComponent } from './components/signals/signals.component';
import { PaiOuMaeComponent } from './components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';
import { AngularPipesComponent } from './components/pipes/angular-pipes/angular-pipes.component';
import { TemplateDrivenFormsComponent } from './components/forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';
import { ContentComponent } from './components/content/content.component';
import { HostElementsComponent } from './components/host-elements/host-elements.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { ConsumeServiceComponent } from '@components/consume-service/consume-service.component';
import { environment } from 'environments/environment';
import { TranslateComponent } from '@components/translate/translate.component';
import { OptImageComponent } from '@components/opt-image/opt-image.component';
import { AnimationsComponent } from '@components/animations/animations.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NewComponent,
    TemplateBindingComponent,
    TemplateVariablesComponent,
    TemplateDeferrableViewsComponent,
    SignalsComponent,
    PaiOuMaeComponent,
    AngularPipesComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    ContentComponent,
    HostElementsComponent,
    LifeCycleComponent,
    ConsumeServiceComponent,
    TranslateComponent,
    OptImageComponent,
    AnimationsComponent,
  ],
  template: `<h1>Curso Angular</h1>
    <app-animations />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent /*implements OnInit*/ {
  //public number = signal(1);
  //public bool = true;
  //ngOnInit(): void {
  // setInterval(() => {
  //   this.number.update((oldvalue) => {
  //    return oldvalue + 1;
  // });
  //}, 1000);
  //}
  constructor() {
    console.log(environment.env);
  }
}

//<router-outlet />
