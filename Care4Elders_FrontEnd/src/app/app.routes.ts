// import { Routes } from '@angular/router';
// import { HomeComponent } from './frontoffice/layout/home/home.component';


// export const routes: Routes = [


//   {
//     path: 'frontoffice/home',
//     component: HomeComponent
//   },
  



//     // Redirect empty path to appointments
//     // {
//     //   path: '',
//     //   redirectTo: 'appointments',
//     //   pathMatch: 'full'
//     // },
//     // Appointments module
//     {
//       path: 'appointments',
//       loadChildren: () =>
//         import('./frontoffice/appointment/appointment.module').then(
//           m => m.AppointmentModule
//         )
//     },
//     // Lazy-loaded example of another module
//     // {
//     //   path: 'patients',
//     //   loadChildren: () =>
//     //     import('./frontoffice/patient/patient.module').then(
//     //       m => m.PatientModule
//     //     )
//     // },
//     // Catch-all route for 404 errors
//     {
//       path: '**',
//       redirectTo: ''
//     }
//   ];


import { Routes } from '@angular/router';
import { HomeComponent } from './frontoffice/layout/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'frontoffice/home',
    pathMatch: 'full'
  },
  {
    path: 'frontoffice/home',
    component: HomeComponent
  },
  {
    path: 'appointments',
    loadComponent: () =>
      import('./frontoffice/pages/appointment/appointment.component').then(
        (m) => m.AppointmentComponent
      )
  },  
  {
    path: '**',
    redirectTo: 'frontoffice/home'
  }
];
