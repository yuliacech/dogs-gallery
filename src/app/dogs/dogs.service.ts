import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dog} from './dog';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DogsService {

    cache: Dog[];

    constructor(private httpClient: HttpClient) {
    }

    getDogs(): Observable<Dog[]> {
        return this.httpClient.get<any[]>('https://api.thedogapi.com/v1/images/search?limit=20')
            .pipe(map(data => this.cache = data));
    }
    getDog(id: string) {
        return this.cache.find(dog => dog.id === id);
    }
}
