import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {FileUploadModule} from 'primeng/fileupload';
import {ToastModule} from 'primeng/toast';

const PrimeNgComponents = [
  ButtonModule,
  TableModule,
  DropdownModule,
  InputTextModule,
  CalendarModule,
  DynamicDialogModule,
  FileUploadModule,
  ToastModule
]

@NgModule({
  declarations: [],
  imports: [
    PrimeNgComponents
  ],
  exports: [
    PrimeNgComponents
  ]
})
export class PrimeNgComponentsModule { }
