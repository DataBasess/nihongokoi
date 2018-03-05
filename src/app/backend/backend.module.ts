import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendComponent } from './backend.component';
import { BackendRoutingModule } from './backend-routing.module';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuServiceService } from '../service/menu-service.service';

@NgModule({
  imports: [
    CommonModule,
    BackendRoutingModule
  ],
  declarations: [BackendComponent, SlidebarComponent, NavbarComponent],
  providers: [MenuServiceService]
})
export class BackendModule { }
