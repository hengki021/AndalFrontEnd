import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Position } from '../models/position.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  baseUrl = 'https://localhost:7005/api/Position';

  constructor(private http: HttpClient) { }

  //get all position

  getAllPositions(): Observable<Position[]>{
    return this.http.get<Position[]>(this.baseUrl);
  }
}
