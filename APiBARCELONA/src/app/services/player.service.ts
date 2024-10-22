// src/app/services/player.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl = 'https://api.example.com/players'; // Substitueix amb l'URL real de l'API

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Funció per obtenir jugadors per categoria
  getPlayersByCategory(category: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?category=${category}`);
  }

  // Funció per obtenir un jugador per ID
  getPlayerById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}