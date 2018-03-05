import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackendComponent } from './backend.component';
import { MenuComponent } from './page/menu/menu.component';

const routes: Routes = [
    {path: '',component: BackendComponent,
        children: [
            {path: 'menu',loadChildren: './page/menu/menu.module#MenuModule'}
        ]
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BackendRoutingModule {}