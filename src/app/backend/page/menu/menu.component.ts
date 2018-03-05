import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from '../../../service/menu-service.service';
import { MenuModel } from '../../../models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus:MenuModel[];
  menu:MenuModel={name:'menu',page:'menu',icon:'icon',sort:0,status:true,date:''};
  button:string="add";
  new_sort:number;
  old_sort:number;

  constructor(
    private menuService:MenuServiceService
  ) { }

  ngOnInit() {
    this.loadAll();
  }

  async loadAll(){
   await this.menuService.getAll().subscribe(list=>{
      this.menus = list.sort((a, b) => a.sort - b.sort);
    })
  }

  save(menu:MenuModel){
    this.menuService.save(menu).then(res=>{
      this.menu = {$key:'',name:'',page:'',icon:'',sort:0,status:true,date:''};
    });
  }

  changStatus(menu){
      this.menuService.changStatus(menu.$key,menu.status).then(res=>{
        console.log(res);        
      }).catch(e=>{
        console.log(e);
      })
  }

  getDetail(menu:MenuModel){
    this.menu = menu;
    this.button = "edit";
  }
  update(menu:MenuModel){
    this.menuService.update(menu).then(res=>{
      console.log(res);
      this.clear();      
    }).catch(e=>{
      console.log(e);      
    })
  }

  clear(){
    this.menu = {$key:'',name:'',page:'',icon:'',sort:0,status:true,date:''};
  }

  sort(menu:MenuModel){
    console.log('new_sort',menu.sort,menu.$key);
      this.new_sort = menu.sort;
      this.menuService.getObject(menu.$key).subscribe(object=>{
        this.old_sort = object.sort;
        console.log('old_sort',this.old_sort,menu.$key);
      });
      this.menuService.row_sort(this.new_sort,this.old_sort,menu.$key);
  }

  delete(menu:MenuModel){
    this.menuService.delete(menu.$key);
  }

}
