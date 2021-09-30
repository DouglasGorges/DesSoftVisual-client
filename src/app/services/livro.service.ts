import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Livro } from '../models/Livro';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  create(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(
      `${this.baseUrl}/create`,
      livro
    );
  }

  list(): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.baseUrl}/list`);
  }

  findById(id: number): Observable<Livro> {
    return this.http.get<Livro>(`${this.baseUrl}/findById/${id}`);
  }

  update(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(
      `${this.baseUrl}/update`,
      livro
    );
  }

  delete(id: number): Observable<Livro> {
    return this.http.delete<Livro>(`${this.baseUrl}/delete/${id}`);
  }
}
