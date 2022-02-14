import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './models/components/paging-header/paging-header.component';
import { PaggerComponent } from './models/components/pagger/pagger.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OrderTotalsComponent } from './models/components/order-totals/order-totals.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TextInputComponent } from './models/components/text-input/text-input.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { StepperComponent } from './models/components/stepper/stepper.component';

@NgModule({
  declarations: [
    PagingHeaderComponent,
    PaggerComponent,
    OrderTotalsComponent,
    TextInputComponent,
    StepperComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    CdkStepperModule
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    PaggerComponent,
    CarouselModule,
    OrderTotalsComponent ,
    ReactiveFormsModule,
    BsDropdownModule,
    TextInputComponent,
    CdkStepperModule,
    StepperComponent
  ]
})
export class SharedModule { }
