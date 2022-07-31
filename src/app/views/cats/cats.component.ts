import { Component, OnInit } from '@angular/core';

import { Cat } from 'core/models';
import { CatService } from 'core/services/http';
import { QueryOptions } from 'core/services/http';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
})
export class CatsComponent implements OnInit {
  cats: Cat[] = [];
  constructor(private CatService: CatService) {}

  ngOnInit(): void {
    const options = new QueryOptions();
    this.CatService.listTest(options).subscribe((d: Cat[]) => {
      console.log(d);
      this.cats = d;
    });
  }
}
