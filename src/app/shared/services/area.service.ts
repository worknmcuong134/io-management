import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Areas, UpdatedAreas, DeletedAreas } from '../interfaces/areas';
import * as DecryptorService from './decryptor.service';
const href = 'http://toddenergy.australiasoutheast.cloudapp.azure.com:8080/areas';
@Injectable({
    providedIn: 'root'
})
export class AreaService {
    constructor(private http: HttpClient) { }
    getHttpOptions = (data) => {
        return {
            headers: new HttpHeaders({
                'guid': '289d10cb-639b-43f3-9fc1-b232e5ae3371',
                'hmac': DecryptorService.getHmacString(null)
            })
        };
    }
    getAreas(): Observable<Areas> {
        const requestUrl = `${href}?orderby=Name%20asc`;
        return this.http.get<Areas>(requestUrl, this.getHttpOptions(null));
    }
}
