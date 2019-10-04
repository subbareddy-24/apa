import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routing components
import { AboutusComponent } from './shared-components/aboutus/aboutus.component';
import { ContactusComponent } from './shared-components/contactus/contactus.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MeterialExamplesComponent } from './components/meterial-examples/meterial-examples.component';
import { FormComponent } from './form/form.component';

// Import service for resolvers
import { DashboardService } from './components/dashboard/dashboard.service';

// Error pages
import { PageNotFoundComponent } from './errors/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/test', pathMatch: 'full' },
  { path: 'test', component: FormComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'dashboard', redirectTo: 'dashboard/COE', pathMatch: 'full' },
  { path: 'dashboard/:code', component: DashboardComponent, resolve: { fileInfo: DashboardService }, pathMatch: 'full' },
  { path: 'dashboard/:code/:id', component: DashboardComponent, resolve: { fileInfo: DashboardService }, pathMatch: 'full' },
  { path: 'material', component: MeterialExamplesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
