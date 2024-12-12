import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importamos Router para manejar la navegación
import { ToastController } from '@ionic/angular'; // Importar el ToastController para los mensajes emergentes

@Component({
  selector: 'app-reset-password',
  templateUrl: 'reset-password.page.html',
  styleUrls: ['reset-password.page.scss'],
})
export class ResetPasswordPage {
  newPassword: string = ''; // Nueva contraseña
  confirmPassword: string = ''; // Confirmación de la nueva contraseña

  constructor(private router: Router, private toastController: ToastController) {}

  // Función para manejar el botón de volver atrás
  goBack() {
    this.router.navigateByUrl('/home'); // Redirige a la página de inicio de sesión
  }

  // Método para manejar el restablecimiento de la contraseña
  async resetPassword() {
    if (this.newPassword === this.confirmPassword) {
      // Mostrar mensaje de éxito
      const toast = await this.toastController.create({
        message: 'Contraseña restablecida con éxito',
        duration: 2000, // Duración en milisegundos
        position: 'top', // Puedes cambiar a 'bottom' si prefieres en la parte inferior
        color: 'success', // Color del mensaje (puedes usar 'primary', 'success', 'danger', etc.)
      });
      toast.present();

      console.log('Contraseña restablecida con éxito');
      // Aquí agregarías la lógica para guardar la nueva contraseña en el sistema o base de datos

      // Redirigir a la página de inicio (home) después de un éxito
      this.router.navigateByUrl('/home');
    } else {
      // Si las contraseñas no coinciden, mostrar un mensaje de error
      const toast = await this.toastController.create({
        message: 'Las contraseñas no coinciden, intenta nuevamente.',
        duration: 2000,
        position: 'top',
        color: 'danger', // Rojo para el error
      });
      toast.present();
      console.error('Las contraseñas no coinciden');
    }
  }
}
