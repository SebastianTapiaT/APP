import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QrScannerService } from './services/qr-scanner.service'; // Importar el servicio
import { APP_INITIALIZER } from '@angular/core'; // Importar APP_INITIALIZER
import { ResetPasswordPageModule } from './reset-password/reset-password.module'; // Importar el módulo de reset-password

// Función para inicializar el servicio
export function initQrScannerService(qrScannerService: QrScannerService) {
  return () => qrScannerService.init();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    ResetPasswordPageModule, // Agregar el módulo de reset-password
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: initQrScannerService,
      deps: [QrScannerService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
