import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MenuServiceService } from '../../../service/menu-service.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MenuRoutingModule
  ],
  declarations: [MenuComponent],
  providers: [MenuServiceService]
})
export class MenuModule { }
