import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';
import { Produit } from './models/produit';
import { environment } from '../environments/environment';

import { ApiService } from './api.service';


@Injectable()
export class FilterService {

  constructor(private http:HttpClient) { }
    public getProduits () : Observable<Produit[]> {
        return this.http.get<Produit[]>(environment.backendClient);
    }

    public getProduitsFiltered(filter: string) : Observable<Produit[]> {
        return this.http.get<Produit[]>(environment.backendClient + "?filter=a" + filter);
    }
}