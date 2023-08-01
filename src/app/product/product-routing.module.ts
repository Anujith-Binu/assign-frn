import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { FindmoreComponent } from './findmore/findmore.component';
import { ShopnowComponent } from './shopnow/shopnow.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{ path: '', component: ViewAllComponent },
                        { path: 'login', component:LoginComponent},
                        { path: 'register', component:RegisterComponent},
                        { path:'add', component:AddComponent},
                        { path:'delete', component:DeleteComponent},
                        { path:'edit', component:EditComponent},
                        { path:'view', component:ViewComponent},
                        { path:'findmore', component:FindmoreComponent},
                        {path:'shopnow', component:ShopnowComponent}
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
