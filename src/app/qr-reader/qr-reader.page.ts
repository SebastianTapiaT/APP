import { Component } from '@angular/core';
import { QrScannerService } from '../services/qr-scanner.service';

@Component({
  selector: 'app-qr-reader',
  templateUrl: './qr-reader.page.html',
  styleUrls: ['./qr-reader.page.scss'],
})
export class QrReaderPage {

  scannedCode: string = ''; // Variable para almacenar el código escaneado

  constructor(private qrScannerService: QrScannerService) {}

  // Método para iniciar el escaneo de QR
  async scanQRCode() {
    const scannedCode = await this.qrScannerService.scanQRCode(); // Llamada al servicio
    if (scannedCode) {
      this.scannedCode = scannedCode; // Guardar el código escaneado
      console.log('Código QR escaneado:', scannedCode);
    } else {
      console.log('No se escaneó ningún código QR');
    }
  }

  ionViewDidEnter() {
    // Iniciar el escaneo cuando la página se cargue
    this.scanQRCode();
  }
}
