import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FontendComponent } from './fontend.component';

const routes: Routes = [
    {
        path: '',
        component: FontendComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FontendRoutingModule {}