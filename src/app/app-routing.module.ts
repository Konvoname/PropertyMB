import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { RecommendComponent } from './component/recommend/recommend.component';
import { LandsComponent } from './component/lands/lands.component';
import { HousesComponent } from './component/houses/houses.component';
import { ReactiveFormsModule } from '@angular/forms';
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
import { RecdetailsComponent } from './component/recommend/recdetails/recdetails.component';
import { UploadimgComponent } from './component/addhouse/uploadimg/uploadimg.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  {
    path: "home", component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  { path: "pagenotfound", component: PagenotfoundComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "recommend", component: RecommendComponent, children: [
    {
      path: '',
      component: RecommendComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: ':id',
      component: RecdetailsComponent,
      canActivate: [AuthGuardService]
    }
  ] },
  { path: "loading", component: LoadingSpinnerComponent },
  {
    path: "lands", component: LandsComponent, children: [
      {
        path: '',
        component: LandslistComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: ':id',
        component: LandsDetailComponent,
        canActivate: [AuthGuardService]
      }
    ]
  },

  {
    path: "houses", component: HousesComponent, children: [
      {
        path: '',
        component: HouseslistComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: ':id',
        component: HousesDetailComponent,
        canActivate: [AuthGuardService]
      }
    ]
  },
  {
    path: "property", component: PropertyComponent, children: [
      {
        path: '',
        component: PropertylistComponent,
        canActivate: [AuthGuardService]
      }
    ]
  },
  {
    path: "groups", component: GroupComponent, children: [
      {
        path: ':id',
        component: GrouplistComponent,
        canActivate: [AuthGuardService]
      }
    ]
  },
  {
    path: "info", component: InfoComponent,
    canActivate: [AuthGuardService]
  },
  { path: "index", component: IndexComponent },
  { path: "test", component: TestComponent },
  {
    path: "addhouse", component: AddhouseComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "addlands", component: AddlandsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "uploadimages", component: UploadimgComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  { path: "**", redirectTo: "pagenotfound" },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
