import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Transacao } from '../models/Transacao';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TransacaoService {
  private baseUrl = `${environment.apiUrl}/transacao`;

  constructor(private http: HttpClient) {}

  create(transacao: Transacao): Observable<Transacao> {
    return this.http.post<Transacao>(
      `${this.baseUrl}/create`,
      transacao
    );
  }

  list(): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(`${this.baseUrl}/list`);
  }

  findById(id: number): Observable<Transacao> {
    return this.http.get<Transacao>(`${this.baseUrl}/findById/${id}`);
  }

  update(transacao: Transacao): Observable<Transacao> {
    return this.http.post<Transacao>(
      `${this.baseUrl}/update`,
      transacao
    );
  }

  delete(id: number): Observable<Transacao> {
    return this.http.delete<Transacao>(`${this.baseUrl}/delete/${id}`);
  }
}
