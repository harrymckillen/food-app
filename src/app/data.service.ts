import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { recipes } from './data/recipes/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
}
