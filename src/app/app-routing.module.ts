import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home', // Redirige a la página de inicio cuando la ruta está vacía
    pathMatch: 'full',
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordPageModule),
  },
  {
    path: 'qr-reader',  // Asegúrate de que esta ruta exista para el lector de QR
    loadChildren: () => import('./qr-reader/qr-reader.module').then(m => m.QrReaderPageModule), // Ruta al módulo de qr-reader
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}