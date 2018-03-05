import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseListFactoryOpts } from 'angularfire2/database-deprecated/interfaces';
import { MenuModel } from '../models/menu';

@Injectable()
export class MenuServiceService {

  opt:FirebaseListFactoryOpts;
  Num_object:number;
  part:string='menu/';
  menu:MenuModel;
  statust:boolean;
  menus:MenuModel[];
  constructor(
    private database:AngularFireDatabase
  ) { }


  save(menu:MenuModel){
    let Sort = this.getNum_object();
    let time = Date.now().toString();
      this.menu = {
         name:menu.name,
         page:menu.page,
         icon:menu.icon,
         sort:Sort,
         status:true,
         date:time
        }
       return this.database.list(this.part).push(menu);
  }

  update(menu:MenuModel){
    return this.database.list(this.part).update(menu.$key,menu);
  }

  getAll():FirebaseListObservable<MenuModel[]>{
    return this.database.list(this.part);
  }

  getMenu():FirebaseListObservable<MenuModel[]>{
    this.opt = {query:{orderByChild:'status',equalTo:true}}
    return this.database.list(this.part,this.opt);
  }

  getObject(key:string){
    return this.database.object(this.part+key);
  }

  getNum_object(){
    this.database.list(this.part).subscribe(list=>{
      let Num_object =  list.length;
      this.Num_object = Num_object+1;      
    });
    return this.Num_object;
  }

  changStatus(key:string,status:boolean){
    console.log(key,status);
    status != true?this.statust = true:this.statust = false;    
    return this.database.object(this.part+key+'/status').set(this.statust);
  }

  sort(key:string,sort:number){
    return this.database.object(this.part+key+'/sort').set(sort);
  }

  row_sort(new_sort:number,old_sort:number,key:string){
      if(new_sort > old_sort){
          this.getAll().subscribe(list=>{
            list.forEach(object=>{
              if(object.sort>old_sort&&object.sort<=new_sort&&object.$key!=key){
                let nextsort = object.sort--;
                this.sort(object.$key,nextsort);
              }
            })
          })
      }else if(new_sort < old_sort){
        this.getAll().subscribe(list=>{
          list.forEach(object=>{
            if(object.sort<old_sort&&object.sort>=new_sort&&object.$key!=key){
              let nextsort = object.sort++;
              this.sort(object.$key,nextsort);
            }
          })
        })
      }
      this.sort(key,new_sort);
  }

  delete(key:string){
    return this.database.list(this.part).remove(key);
  }

}
