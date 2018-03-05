import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from '../../service/menu-service.service';
import { MenuModel } from '../../models/menu';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit {

  menus:MenuModel[];
  constructor(
    private menuService:MenuServiceService
  ) { }

  ngOnInit() {
    this.menuService.getMenu().subscribe(list=>{
      this.menus = list.sort((a, b) => a.sort - b.sort);
    })
  }

}
