import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Importamos el controlador de alertas

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = ''; // Variable para almacenar el nombre de usuario
  password: string = ''; // Variable para almacenar la contraseña

  constructor(private router: Router, private alertController: AlertController) {}

  // Método para manejar el inicio de sesión
  async login() {
    // Validación de usuario y contraseña
    if (this.username === 'seba' && this.password === '12345') {
      // Si las credenciales son correctas, muestra la alerta de éxito
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Inicio de sesión exitoso',
        buttons: ['OK'],
      });
      await alert.present();

      // Redirigir a la página del lector de QR después de la alerta
      await alert.onDidDismiss();  // Esperar a que la alerta se cierre
      this.router.navigateByUrl('/qr-reader');  // Redirigir al lector de QR
    } else {
      // Si las credenciales son incorrectas, muestra la alerta de error
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Contraseña incorrecta',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  // Método para redirigir a la página de recuperación de contraseña
  goToResetPassword() {
    this.router.navigateByUrl('/reset-password'); // Redirige a la página de restablecimiento de contraseña
  }
}
