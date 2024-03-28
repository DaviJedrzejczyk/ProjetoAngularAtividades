import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, catchError, shareReplay, tap, throwError } from 'rxjs';

interface ITask {
  id: string;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //Novo
  //public name = signal('Davi');

  //Antigo
  //public name$ = new BehaviorSubject('Davi $'); //Forma antiga de compartilhar dados entre components

  constructor(private _http: HttpClient) {}
  #url = signal(environment.apiTask);

  #setListTask = signal<ITask[] | null>(null);
  public getListTask = this.#setListTask.asReadonly();

  public httpListTask$(): Observable<Array<ITask>> {
    const headers = new HttpHeaders().set('x-vida-full-stack', 'dev');
    const params = new HttpParams().set('page', '1');

    this.#setListTask.set(null);
    return this._http
      .get<ITask[]>(this.#url(), { headers, params })
      .pipe(tap((res) => this.#setListTask.set(res)));
  }

  #setTaskId = signal<ITask | null>(null);
  get getTaskId() {
    return this.#setTaskId.asReadonly();
  }
  #setTaskIdError = signal<ITask | null>(null);
  get getTaskIdError() {
    return this.#setTaskIdError.asReadonly();
  }
  public httpTaskId$(id: string): Observable<ITask> {
    this.#setTaskId.set(null);
    this.#setTaskIdError.set(null);
    return this._http.get<ITask>(`${this.#url()}/${id}`).pipe(
      shareReplay(),
      tap((res) => this.#setTaskId.set(res)),
      catchError((error: HttpErrorResponse) => {
        this.#setTaskIdError.set(error.error.message);
        return throwError(() => error);
      })
    );
  }

  // #setTaskCreate = signal<ITask | null>(null);
  // get getTaskCreate() {
  //   return this.#setTaskCreate.asReadonly();
  // }

  #setTaskCreateError = signal<ITask | null>(null);
  get getTaskCreateError() {
    return this.#setTaskCreateError.asReadonly();
  }
  public httpTaskCreate$(title: string): Observable<ITask> {
    return this._http.post<ITask>(this.#url(), { title }).pipe(
      shareReplay(),
      catchError((error: HttpErrorResponse) => {
        this.#setTaskCreateError.set(error.error.message);
        return throwError(() => error);
      })
    );
  }

  #setTaskUpdate = signal<ITask | null>(null);
  get getTaskUpdate() {
    return this.#setTaskUpdate.asReadonly();
  }
  public httpTaskUpdate$(id: string, title: string): Observable<ITask> {
    return this._http.patch<ITask>(`${this.#url()}/${id}`, { title }).pipe(
      shareReplay(),
      tap((res) => this.#setTaskUpdate.set(res))
    );
  }

  #setTaskDelete = signal<ITask | null>(null);
  get getTaskDelete() {
    return this.#setTaskDelete.asReadonly();
  }
  public httpTaskDelete$(id: string): Observable<void> {
    return this._http
      .delete<void>(`${this.#url()}/${id}`, {})
      .pipe(shareReplay());
  }
}
