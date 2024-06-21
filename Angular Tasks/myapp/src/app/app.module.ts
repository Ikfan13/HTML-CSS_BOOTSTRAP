import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MypipeComponent } from './components/mypipe/mypipe.component';
import { CubePipe } from './shared/custompipe/cube.pipe';
import { AreaofsquarePipe } from './shared/custompipe/areaofsquare.pipe';
import { AreaofcirclePipe } from './shared/custompipe/areaofcircle.pipe';
import { EmpdetailsComponent } from './components/empdetails/empdetails.component';
import { ToggleimageComponent } from './components/toggleimage/toggleimage.component';
import { VehiclelistComponent } from './components/vehiclelist/vehiclelist.component';
import { AngFormComponent } from './components/ang-form/ang-form.component';
import { RtfComponent } from './components/rtf/rtf.component';
import { UtdfComponent } from './components/utdf/utdf.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirectiveComponent,
    MypipeComponent,
    CubePipe,
    AreaofsquarePipe,
    AreaofcirclePipe,
    EmpdetailsComponent,
    ToggleimageComponent,
    VehiclelistComponent,
    AngFormComponent,
    RtfComponent,
    UtdfComponent,
    PagenotfoundComponent,
    MainDashboardComponent,
    NavComponent,
    FooterComponent,
    BreakfastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
