import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoguinComponent} from './components/loguin/loguin.component';
/*import { GuardGuard } from './servicios/guard.guard';*/

const routes: Routes = [
  {path:'', component:HomeComponent/*, canActivate:[GuardGuard]*/},
  {path:'home',component:HomeComponent},
  {path:'login', component:LoguinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
