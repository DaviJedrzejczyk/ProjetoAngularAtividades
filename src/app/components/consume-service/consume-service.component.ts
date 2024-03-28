import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { ApiService } from 'app/services/api.service';

import { toSignal } from '@angular/core/rxjs-interop';
import { concat, concatMap } from 'rxjs';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsumeServiceComponent implements OnInit {
  #apiService = inject(ApiService);
  constructor(private _apiService: ApiService) {}

  //public getTask = signal<null | Array<{ id: string; title: string }>>(null);

  public getListTask = this.#apiService.getListTask;
  public getTaskId = this.#apiService.getTaskId;
  public getTaskIdError = this.#apiService.getTaskIdError;

  public getTaskCreateError = this.#apiService.getTaskCreateError;
  ngOnInit(): void {
    this.#apiService.httpListTask$().subscribe();
    this.#apiService.httpTaskId$('6OZpjMasdasdasdToyOCahby3ca6A').subscribe();
  }

  public httpTaksCreate(title: string) {
    return this.#apiService
      .httpTaskCreate$(title)
      .pipe(concatMap(() => this.#apiService.httpListTask$()))
      .subscribe();
  }

  public httpTaskUpdate(id: string, title: string) {
    return this.#apiService
      .httpTaskUpdate$(id, title)
      .pipe(concatMap(() => this.#apiService.httpListTask$()))
      .subscribe();
  }

  public httpTaskDelete(id: string) {
    return this.#apiService
      .httpTaskDelete$(id)
      .pipe(concatMap(() => this.#apiService.httpListTask$()))
      .subscribe();
  }
}

// toSignal(this.#apiService.httpListTask$());

//this.getTask$.subscribe({
// next: (next) => {
//    console.log(next);
//this.getTask.set(next);
//  },
//  error: (error) => console.log(error),
//  complete: () => console.log('Completo'),
// });
