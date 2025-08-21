import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { ScannerComponent } from './scanner/scanner.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'qrcode', component: QrcodeComponent},
  {path: 'scanner', component: ScannerComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'} // by default redirect to dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
