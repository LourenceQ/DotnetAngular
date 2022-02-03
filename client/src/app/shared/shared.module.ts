import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './models/components/paging-header/paging-header.component';
import { PaggerComponent } from './models/components/pagger/pagger.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OrderTotalsComponent } from './models/components/order-totals/order-totals.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    PagingHeaderComponent,
    PaggerComponent,
    OrderTotalsComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    PaggerComponent,
    CarouselModule,
    OrderTotalsComponent ,
    ReactiveFormsModule,
    BsDropdownModule
  ]
})
export class SharedModule { }
