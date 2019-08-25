import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TimeagoModule } from 'ngx-timeago';
import { TimeAgoThaiPipe } from './lib/Pipe/TimeAgoThaiPipe';
import { PropertyFilterPipe } from './lib/Pipe/property-filter.pipe';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import {FileUploadModule} from 'ng2-file-upload';
import { ArchwizardModule } from 'angular-archwizard';

import { AboutusComponent } from './component/aboutus/aboutus.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { RecommendComponent } from './component/recommend/recommend.component';
import { LandsComponent } from './component/lands/lands.component';
import { HousesComponent } from './component/houses/houses.component';
import { InfoComponent } from './component/info/info.component';
import { IndexComponent } from './component/index/index.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AuthenticationService } from './authentication.service'
import { AuthGuardService } from './auth-guard.service';
import { AddhouseComponent } from './component/addhouse/addhouse.component';
import { AddlandsComponent } from './component/addlands/addlands.component';
import { LandsDetailComponent } from './component/lands/lands-detail/lands-detail.component';
import { LandslistComponent } from './component/lands/landslist/landslist.component';
import { HousesDetailComponent } from './component/houses/houses-detail/houses-detail.component';
import { HouseslistComponent } from './component/houses/houseslist/houseslist.component';
import { PropertyComponent } from './component/property/property.component';
import { PropertylistComponent } from './component/property/propertylist/propertylist.component';
import { GroupComponent } from './component/group/group.component';
import { GrouplistComponent } from './component/group/grouplist/grouplist.component';
import { TestComponent } from './component/test/test.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { PagenotfoundComponent } from './lib/pagenotfound/pagenotfound.component';
import { GroupdetailComponent } from './component/group/grouplist/groupdetail/groupdetail.component';
import { RecdetailsComponent } from './component/recommend/recdetails/recdetails.component';
import { UploadimgComponent } from './component/addhouse/uploadimg/uploadimg.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    RecommendComponent,
    LandsComponent,
    HousesComponent,
    InfoComponent,
    IndexComponent,
    FooterComponent,
    ProfileComponent,
    AddhouseComponent,
    AddlandsComponent,
    LandsDetailComponent,
    LandslistComponent,
    HousesDetailComponent,
    HouseslistComponent,
    PropertyComponent,
    PropertylistComponent,
    GroupComponent,
    GrouplistComponent,
    TestComponent,
    LoadingSpinnerComponent,
    TimeAgoThaiPipe,
    PagenotfoundComponent,
    GroupdetailComponent,
    RecdetailsComponent,
    PropertyFilterPipe,
    UploadimgComponent,
    



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    GooglePlaceModule,
    TimeagoModule,
    FileUploadModule,
    ArchwizardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAJZWeALRjPTmtec1IjK50FaPCmrda02Oc',
      libraries: ['places']
    }),
    BrowserAnimationsModule,
   

  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
