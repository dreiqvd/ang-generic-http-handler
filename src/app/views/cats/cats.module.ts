import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CatService } from 'core/services/http';
import { CatsRoutingModule } from './cats-routing.module';
import { CatsComponent } from './cats.component';

@NgModule({
  declarations: [CatsComponent],
  imports: [CommonModule, HttpClientModule, CatsRoutingModule],
  providers: [CatService],
})
export class CatsModule {}
