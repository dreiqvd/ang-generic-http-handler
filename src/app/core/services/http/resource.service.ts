import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Model } from 'core/models';
import { QueryOptions } from './resource.interface';

export class ResourceService<T extends Model> {
  constructor(private httpClient: HttpClient, private url: string) {}

  public create(item: T): Observable<T> {
    return this.httpClient
      .post<T>(`${this.url}`, item)
      .pipe(map((resp: any) => this.serializeResponse(resp) as T));
  }

  public update(item: T): Observable<T> {
    return this.httpClient
      .put<T>(`${this.url}/${item.id}`, item)
      .pipe(map((resp: any) => this.serializeResponse(resp) as T));
  }

  public read(id: number): Observable<T> {
    return this.httpClient
      .get(`${this.url}/${id}`)
      .pipe(map((resp: any) => this.serializeResponse(resp) as T));
  }

  public list(queryOptions: QueryOptions): Observable<T[]> {
    return this.httpClient
      .get(`${this.url}?${queryOptions.toQueryString()}`)
      .pipe(map((resp: any) => this.serializeResponse(resp) as T[]));
  }

  private serializeResponse(response: any) {
    return response.body;
  }
}
