import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { ToggleimageComponent } from './components/toggleimage/toggleimage.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { EmpdetailsComponent } from './components/empdetails/empdetails.component';
import { AngFormComponent } from './components/ang-form/ang-form.component';
import { RtfComponent } from './components/rtf/rtf.component';
import { UtdfComponent } from './components/utdf/utdf.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import path from 'path';
import { BreakfastComponent } from './components/breakfast/breakfast.component';

const routes: Routes = [{path:"MainDashBoard",component:MainDashboardComponent,children:[{path:"databinding",component:DatabindingComponent},
  {
    path:"directive"
    ,component:DirectiveComponent
  },
  {path:"breakfast",component:BreakfastComponent},
  {path:"toggleimg",component:ToggleimageComponent},
  //{
    // path:"",
    // redirectTo:"directive"
    // ,pathMatch:"full"
 //},
  {
    path:"empdetails"
    ,component:EmpdetailsComponent
  },
  {path:"AngForm",component:AngFormComponent,children:[{path:"rtf",component:RtfComponent},{path:"utdf",component:UtdfComponent}]}]},
  {
    path:"**",
    component:PagenotfoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
