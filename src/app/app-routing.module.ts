import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApplicationsModule } from './home/applications/applications.module';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'applications',
        loadChildren: () => import('./home/applications/applications.module').then(mod => mod.ApplicationsModule)
      }
    ],
  },
  { path: '', redirectTo: '/home/applications', pathMatch: 'full' },
  { path: '**', redirectTo: '/home/applications', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
