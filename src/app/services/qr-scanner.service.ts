import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint } from '@capacitor/barcode-scanner';

@Injectable({
  providedIn: 'root',
})
export class QrScannerService {
  private barcodeScannerSupported: boolean = false; // Verificar si el escáner es soportado

  constructor() {}

  // Inicializa el servicio y verifica si el escaneo está soportado
  async init(): Promise<void> {
    try {
      const result = await BarcodeScanner.isSupported();
      this.barcodeScannerSupported = result.supported;
      console.log('Escáner soportado:', this.barcodeScannerSupported);
    } catch (e) {
      console.error('Error al verificar soporte de escáner', e);
      this.barcodeScannerSupported = false;
    }
  }

  // Realiza el escaneo del código QR y devuelve el primer código escaneado
  async scanQRCode(): Promise<string> {
    if (this.barcodeScannerSupported) {
      try {
        // Solicitar permisos para la cámara
        const hasPermissions = await this.requestPermissions();
        if (!hasPermissions) {
          console.error('Permisos para usar la cámara no concedidos');
          return ''; // Si no se tienen permisos
        }

        const { barcodes } = await BarcodeScanner.scan(); // Escanear el código QR
        if (barcodes.length > 0) {
          return barcodes[0].rawValue; // Retornar el primer código QR encontrado
        } else {
          console.log('No se detectó ningún código QR');
          return ''; // Si no se escaneó ningún código
        }
      } catch (error) {
        console.error('Error al escanear el código QR:', error);
        return ''; // Si ocurre algún error durante el escaneo
      }
    } else {
      console.error('Escáner no soportado');
      return ''; // Si el escáner no está soportado
    }
  }

  // Solicita permisos para usar la cámara
  private async requestPermissions(): Promise<boolean> {
    try {
      const { camera } = await BarcodeScanner.requestPermissions(); // Solicitar permisos de cámara
      return camera === 'granted' || camera === 'limited'; // Devuelve verdadero si se conceden los permisos
    } catch (error) {
      console.error('Error al solicitar permisos de cámara:', error);
      return false; // Retorna falso si ocurre un error
    }
  }
}
