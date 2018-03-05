import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontendComponent } from './fontend.component';
import { FontendRoutingModule } from './fontend-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FontendRoutingModule
  ],
  declarations: [FontendComponent]
})
export class FontendModule { }
