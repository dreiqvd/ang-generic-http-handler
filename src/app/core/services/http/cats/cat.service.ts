import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Cat } from 'core/models';
import { ResourceService } from '../resource.service';
import { QueryOptions } from '../resource.interface';

// Not providing in root since we only want to expose this service in 'cats' view
@Injectable()
export class CatService extends ResourceService<Cat> {
  constructor(httpClient: HttpClient) {
    super(httpClient, '<your server url here>');
  }

  // Note: This method is to be removed. This is only for returning an Observable test data
  public listTest(queryOptions: QueryOptions): Observable<Cat[]> {
    const testData: Cat[] = [
      {
        id: 1,
        name: 'Tofu',
        createdAt: Date.now().toString(),
        updatedAt: Date.now().toString(),
      },
      {
        id: 2,
        name: 'Nuggets',
        createdAt: Date.now().toString(),
        updatedAt: Date.now().toString(),
      },
    ];
    return of(testData);
  }
}
