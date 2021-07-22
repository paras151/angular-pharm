import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MedicineStockComponent} from './medicine-stock/medicine-stock.component';
import {AppointmentsComponent} from './appointments/appointments.component'
const routes: Routes = [
  {path : 'login', component:LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path : 'register', component:RegisterComponent},
  {path : 'medicine-stock', component:MedicineStockComponent},
  {path : 'appointments', component:AppointmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
