import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './models/components/paging-header/paging-header.component';
import { PaggerComponent } from './models/components/pagger/pagger.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OrderTotalsComponent } from './models/components/order-totals/order-totals.component';

@NgModule({
  declarations: [
    PagingHeaderComponent,
    PaggerComponent,
    OrderTotalsComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    PaggerComponent,
    CarouselModule,
    OrderTotalsComponent 
  ]
})
export class SharedModule { }
